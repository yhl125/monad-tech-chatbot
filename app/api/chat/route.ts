import { StreamingTextResponse } from "ai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
import { introduction } from "@/app/data/docs/introduction";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { StringOutputParser } from "langchain/schema/output_parser";
import { formatDocumentsAsString } from "langchain/util/document";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { RunnableSequence } from "langchain/schema/runnable";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // const { stream, handlers } = LangChainStream();

  const llm = new ChatOpenAI({
    streaming: true,
  });
  console.log(messages);

  const docs = [introduction];
  const docOutput = await splitDocs(docs);
  const vectorStore = await MemoryVectorStore.fromDocuments(
    docOutput,
    new OpenAIEmbeddings()
  );
  const retriever = vectorStore.asRetriever();

  // Create a system & human prompt for the chat model
  const SYSTEM_TEMPLATE = `Use the following pieces of context to answer the users question.
If you don't know the answer, just say that you don't know, don't try to make up an answer.
----------------
{context}`;

  const promptTemplates = [
    SystemMessagePromptTemplate.fromTemplate(SYSTEM_TEMPLATE),
    HumanMessagePromptTemplate.fromTemplate("{question}"),
  ];
  const prompt = ChatPromptTemplate.fromMessages(promptTemplates);

  const chain = RunnableSequence.from([
    {
      // Extract the "question" field from the input object and pass it to the retriever as a string
      sourceDocuments: RunnableSequence.from([
        (input) => input.question,
        retriever,
      ]),
      question: (input) => input.question,
    },
    {
      // Pass the source documents through unchanged so that we can return them directly in the final result
      sourceDocuments: (previousStepResult) =>
        previousStepResult.sourceDocuments,
      question: (previousStepResult) => previousStepResult.question,
      context: (previousStepResult) =>
        formatDocumentsAsString(previousStepResult.sourceDocuments),
    },
    {
      result: prompt.pipe(llm).pipe(new StringOutputParser()),
      sourceDocuments: (previousStepResult) =>
        previousStepResult.sourceDocuments,
    },
  ]);
  // TODO: when using chain.stream, it gives bad quality results
  const res = await chain.invoke({
    // use the last message
    question: messages[messages.length - 1].content,
  });
  console.log(res);

  return new StreamingTextResponse(res);
}

// Cheerio cannot execute JavaScript code on the page, so we cannot use
// async function readDocs() {
//   const loader = new CheerioWebBaseLoader("https://docs.monad.xyz/");

//   const docs = await loader.load();

//   return docs;
// }

async function splitDocs(documents: Document<Record<string, any>>[]) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const docOutput = await splitter.splitDocuments(documents);
  return docOutput;
}
