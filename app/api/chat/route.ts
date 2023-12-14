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

import { briefings } from "@/app/data/docs/briefings";
import { monadForDevelopers } from "@/app/data/docs/briefings/monad-for-developers";
import { monadForUsers } from "@/app/data/docs/briefings/monad-for-users";
import { technicalDiscussion } from "@/app/data/docs/technical-discussion";
import { usingMonad } from "@/app/data/docs/using-monad";
import { officialLinks } from "@/app/data/docs/official-links";
import { runningANode } from "@/app/data/docs/using-monad/running-a-node";
import { hardwareRequirements } from "@/app/data/docs/using-monad/running-a-node/hardware-requirements";
import { developingOnMonad } from "@/app/data/docs/using-monad/developing-on-monad";
import { suggestedResources } from "@/app/data/docs/using-monad/developing-on-monad/suggested-resources";
import { evmBehavior } from "@/app/data/docs/using-monad/developing-on-monad/suggested-resources/evm-behavior";
import { furtherSolidityResources } from "@/app/data/docs/using-monad/developing-on-monad/suggested-resources/further-solidity-resources";
import { debuggingOnChain } from "@/app/data/docs/using-monad/developing-on-monad/suggested-resources/debugging-on-chain";
import { otherLanguages } from "@/app/data/docs/using-monad/developing-on-monad/suggested-resources/other-languages";
import { vyperResources } from "@/app/data/docs/using-monad/developing-on-monad/suggested-resources/other-languages/vyper-resources";
import { huffResources } from "@/app/data/docs/using-monad/developing-on-monad/suggested-resources/other-languages/huff-resources";
import { concepts } from "@/app/data/docs/technical-discussion/concepts";
import { pipelining } from "@/app/data/docs/technical-discussion/concepts/pipelining";
import { asynchronousIO } from "@/app/data/docs/technical-discussion/concepts/asynchronous-i-o";
import { whyBlockchain } from "@/app/data/docs/technical-discussion/why-blockchain";
import { whyMonad } from "@/app/data/docs/technical-discussion/why-monad-decentralization-+-performance";
import { consensus } from "@/app/data/docs/technical-discussion/consensus";
import { monadbft } from "@/app/data/docs/technical-discussion/consensus/monadbft";
import { sharedMempool } from "@/app/data/docs/technical-discussion/consensus/shared-mempool";
import { deferredExecution } from "@/app/data/docs/technical-discussion/consensus/deferred-execution";
import { carriageCost } from "@/app/data/docs/technical-discussion/consensus/carriage-cost-and-reserve-balance";
import { execution } from "@/app/data/docs/technical-discussion/execution";
import { parallelExecution } from "@/app/data/docs/technical-discussion/execution/parallel-execution";
import { monadDb } from "@/app/data/docs/technical-discussion/execution/monaddb";
import { transactionLifecycle } from "@/app/data/docs/technical-discussion/transaction-lifecycle-in-monad";
import { otherDetails } from "@/app/data/docs/technical-discussion/other-details";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // const { stream, handlers } = LangChainStream();

  const llm = new ChatOpenAI({
    // streaming: true,
    modelName: "gpt-3.5-turbo",
  });
  const docs = [
    introduction,
    briefings,
    monadForUsers,
    monadForDevelopers,
    technicalDiscussion,
    concepts,
    pipelining,
    asynchronousIO,
    whyBlockchain,
    whyMonad,
    consensus,
    monadbft,
    sharedMempool,
    deferredExecution,
    carriageCost,
    execution,
    parallelExecution,
    monadDb,
    transactionLifecycle,
    otherDetails,
    usingMonad,
    runningANode,
    hardwareRequirements,
    developingOnMonad,
    suggestedResources,
    evmBehavior,
    furtherSolidityResources,
    debuggingOnChain,
    otherLanguages,
    vyperResources,
    huffResources,
    officialLinks,
  ];
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

  const responseStream = new ReadableStream({
    async start(controller) {
      const bytes = new TextEncoder().encode(JSON.stringify(res));
      controller.enqueue(bytes);
      controller.close();
    },
  });
  return new StreamingTextResponse(responseStream);
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
