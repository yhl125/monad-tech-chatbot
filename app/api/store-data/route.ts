import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
import { OpenAIEmbeddings } from "@langchain/openai";
import { VercelPostgres } from "@langchain/community/vectorstores/vercel_postgres";

// docs
import { introduction } from "@/app/data/docs/introduction";
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
// substack
import { monadMonthly960 } from "@/app/data/substack/monad-monthly-960";
import { monadLabsRaises225m } from "@/app/data/substack/monad-labs-raises-225m-in-funding";
import { monadMonthly30a } from "@/app/data/substack/monad-monthly-30a";
import { monadMonthly87e } from "@/app/data/substack/monad-monthly-8e7";
import { monadMonthly } from "@/app/data/substack/monad-monthly";
import { mitigatingMev } from "@/app/data/substack/mitigating-mev";
import { blockchainTheLargestExperiment } from "@/app/data/substack/blockchain-the-largest-experiment";
import { highFidelityOraclesComingToDefi } from "@/app/data/substack/high-fidelity-oracles-coming-to-defi";
import { onChainLimitOrderBooks } from "@/app/data/substack/on-chain-limit-order-books";
import { monadVsRollups } from "@/app/data/substack/monad-vs-rollups";
import { securityBenefitsOfMonad } from "@/app/data/substack/the-security-benefits-of-monad";
import { monadRaises19m } from "@/app/data/substack/monad-raises-19m";
import { parallelExecutionMonad } from "@/app/data/substack/parallel-execution-monad";
import { whyCryptoWillPrevail } from "@/app/data/substack/why-crypto-will-prevail";
import { monadLabsIsHiring } from "@/app/data/substack/monad-labs-is-hiring";
// discord ama
import { november28 } from "@/app/data/discord/ama/november28";
import { december8 } from "@/app/data/discord/ama/december8";
import { april11 } from "@/app/data/discord/ama/april11";
// https://github.com/langchain-ai/langchainjs/issues/3521
// export const runtime = "edge";

export async function POST(req: Request) {
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

  const substack = [
    monadMonthly960,
    monadLabsRaises225m,
    monadMonthly30a,
    monadMonthly87e,
    monadMonthly,
    mitigatingMev,
    blockchainTheLargestExperiment,
    highFidelityOraclesComingToDefi,
    onChainLimitOrderBooks,
    monadVsRollups,
    securityBenefitsOfMonad,
    monadRaises19m,
    parallelExecutionMonad,
    whyCryptoWillPrevail,
    monadLabsIsHiring,
  ];

  const discordAma = november28.concat(december8).concat(april11);

  const docOutput = await splitDocs(docs.concat(substack).concat(discordAma));

  const embeddings = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY,
    model: "text-embedding-3-small",
  });

  // Create vector store and index the docs
  const vectorstore = await VercelPostgres.initialize(embeddings, {
    tableName: "monad",
  });
  await vectorstore.addDocuments(docOutput);

  return new Response("Success");
}

async function splitDocs(documents: Document<Record<string, any>>[]) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const docOutput = await splitter.splitDocuments(documents);
  return docOutput;
}
