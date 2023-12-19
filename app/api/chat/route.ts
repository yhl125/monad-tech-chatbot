import { StreamingTextResponse } from "ai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { StringOutputParser } from "langchain/schema/output_parser";
import { formatDocumentsAsString } from "langchain/util/document";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { RunnableSequence } from "langchain/schema/runnable";
import { Chroma } from "langchain/vectorstores/chroma";

// https://github.com/langchain-ai/langchainjs/issues/3521
// export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // const { stream, handlers } = LangChainStream();

  const llm = new ChatOpenAI({
    // streaming: true,
    modelName: "gpt-3.5-turbo",
  });

  const vectorStore = await Chroma.fromExistingCollection(
    new OpenAIEmbeddings(),
    {
      collectionName: "monad",
      url: process.env.CHROMA_URL,
    }
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
        (input) => "search in context." + input.question,
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

  const responseStream = new ReadableStream({
    async start(controller) {
      const bytes = new TextEncoder().encode(JSON.stringify(res));
      controller.enqueue(bytes);
      controller.close();
    },
  });
  return new StreamingTextResponse(responseStream);
}
