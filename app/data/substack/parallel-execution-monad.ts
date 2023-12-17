import { Document } from "langchain/document";

export const parallelExecutionMonad: Document<Record<string, any>> = {
  metadata: { source: "https://monadlabs.substack.com/p/parallel-execution-monad-f4c203cddf31" },
  pageContent: `# Parallel Execution & Monad

  [![](https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b238428-63b5-494b-876d-2eee81906676_256x256.jpeg)](https://substack.com/profile/19356127-keone)
  
  [KEONE](https://substack.com/@keoneh)
  
  2023. 2. 11.
  
  Share
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9490adc4-600e-434d-b98b-e64d41d0cef6_1019x1533.jpeg)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9490adc4-600e-434d-b98b-e64d41d0cef6_1019x1533.jpeg)
  
  **Introduction**
  
  This cycle gave us a glimpse into the potential of blockchain. Between DeFi, NFTs, gaming, social media, and numerous other applications, crypto showed that it can have real world use. Regardless of the applications being built, they will not be prepared for mass adoption until the blockchains they are built on can support it.
  
  As long as blockchains have existed, engineers have been searching for ways to scale them. This has led to many different scaling solutions being implemented across various chains. This allows us to compare and contrast their transactions per second, the key metric for scalability, and identify which methods are most effective.
  
  **The EVM**
  
  There are two main components in a smart contract blockchain: the consensus mechanism and the virtual machine. The consensus mechanism allows hundreds of nodes to come to agreement about transaction ordering and inclusion. The virtual machine (VM) executes app code and updates the persistent state of each app, as well as global account balances.
  
  Ethereum was the first blockchain to meaningfully enable programmable smart contracts, aka apps. The Ethereum Virtual Machine (EVM) is essentially a shared computing engine. The system consists of many nodes, each of which is a perfect replica of all the others, with all of the same apps and all of the same state. Users make function calls on smart contracts by submitting transaction messages to the network. Pending transactions are periodically assembled into an official ordering of transactions, aka a block, and each of the nodes in the network executes that official ordering, thus staying in sync.
  
  Apps in Ethereum are expressed in a bytecode format called [EVM bytecode](https://www.evm.codes/?fork=arrowGlacier). Expressing the programs in a standard bytecode allows program execution to be sandboxed and platform-agnostic.
  
  EVM bytecode is battle-tested and reliable. It has reached critical mass as the dominant smart contract standard. More specifically, the higher-level languages [Solidity](https://docs.soliditylang.org/) or [Vyper](https://vyper.readthedocs.io/), which generate EVM bytecode, are the tools that most smart contract developers use, and the language in which most libraries and apps are implemented. EVM has Javascript-level ubiquity; it is responsible for 97% of the TVL in DeFi [according to DefiLlama](https://defillama.com/languages), and it is supported by over 20 blockchains. As a result, it is the safe choice for developers who want their code to be maximally portable.
  
  **The Landscape for EVM Execution**
  
  Although many blockchains support the EVM bytecode standard, they all leave much to be desired from a throughput perspective.
  
  Below are transactions per second (tps) figures for a typical [UniswapV3](https://etherscan.io/txs?a=0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45) transaction, which is 130k gas. As you can see, most chains offer up to ~200 tps, or ~20M transactions per day.
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff5289dce-2d52-4eb4-8b27-a451f0a9057b_713x374.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff5289dce-2d52-4eb4-8b27-a451f0a9057b_713x374.png)
  
  This is validated by real metrics from the past month courtesy of [EthTPS.info](https://ethtps.info/):
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3530e533-35b1-48a7-a934-536b58e8280e_1024x486.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3530e533-35b1-48a7-a934-536b58e8280e_1024x486.png)
  
  Further [analysis](https://medium.com/dragonfly-research/the-amm-test-a-no-bs-look-at-l1-performance-4c8c2129d581) from Dragonfly Capital also bears out this point.
  
  Ethereum only processes about 10 transactions per second. The fastest EVM chain, Binance Chain, runs at just over 200 tps. For reference: a simple card game with 10,000 users making a move every 10 seconds would need to have 1000 tps.
  
  **Parallel Execution**
  
  The truth is, all EVM chains fall victim to the same weakness: sequential execution. The EVM can only execute one transaction at a time! This is the simplest implementation, and simple is always a good first approach, but we need to evolve.
  
  Sequential execution is inefficient. If two transactions are independent, e.g. Alice pays Bob and Chris pays Dave, a more intelligent scheduler would understand that these transactions could be parallelized.
  
  Developers identified this bottleneck and have been trying to solve parallel execution. Solana introduced a system for parallel execution called Sealevel, which, along with other innovations, allowed them to achieve 500–1000 tps (excluding votes). However, to achieve this speed they had to design their own VM as well.
  
  **The main challenge of parallel execution is identifying independent transactions.** Solana solved this by making programs stateless and requiring transactions to specify all state that will be read or written during execution. This allows independent transactions to execute in parallel. It also allows for transactions reading the same state to execute concurrently.
  
  **Transaction dependencies are more obvious in some cases than others.** A simple token transfer between two parties affects no one else. But transactions interacting with the same smart contract can change the state and therefore cannot execute in parallel. For example, an AMM swap could be routed through multiple pools, and all pools involved cannot process other transactions until the first is done.
  
  Overall, Solana’s innovation in parallel execution unlocked a new means to scalability. While the Solana is by far the most performant chain we’ve seen, its lack of EVM compatibility has hindered adoption. This poses the question: what if you could implement parallel execution on an EVM chain?
  
  This question is not a hypothetical. Monad is building a high performance, EVM compatible base layer blockchain that enables parallel execution.
  
  **Mo’nad, Mo’throughput**
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe611622c-6bb2-427c-aa70-f4b6bb2c2db5_1024x1203.jpeg)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe611622c-6bb2-427c-aa70-f4b6bb2c2db5_1024x1203.jpeg)
  
  Monad enables parallel execution for EVM transactions **that don’t have common dependencies.** That is, transactions and blocks are still linearly ordered; Monad simply identifies transactions within that linear ordering that can be executed in parallel **without disruption to the outcome.** This allows Monad to process transactions more efficiently without disrupting app developers. Apps originally written for Ethereum and deployed on Monad will still work the same way.
  
  Transactions without common dependencies are scheduled in parallel on separate cores. Transactions with common dependencies are scheduled back to back. Consecutive scheduling also reduces I/O overhead, a significant component of latency in the existing EVM implementation.
  
  Our MVP achieves 10,000 tps through pipelined execution and other innovations. There is also opportunity for incremental improvement as we improve the dependency estimation algorithm and consensus mechanism. Our long term target is the physical limit of bandwidth: ~400,000 TPS.
  
  Check us out at monad.xyz or follow us on twitter @monad_xyz to learn more about the fastest EVM chain in existence!
  `,
};
