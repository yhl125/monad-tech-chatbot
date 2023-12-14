import { Document } from "langchain/document";

export const technicalDiscussion: Document<Record<string, any>> = {
  metadata: { source: "https://docs.monad.xyz/technical-discussion" },
  pageContent: `# Technical discussion

  The technical discussion is divided into several major areas:
  
  - [Concepts](https://docs.monad.xyz/technical-discussion/concepts): reviewing a few crucial concepts from Computer Science
      
  
  - [Why blockchain?](https://docs.monad.xyz/technical-discussion/why-blockchain): offering a mental model for the value of decentralized shared global state
      
  
  - [Why Monad: decentralization + performance](https://docs.monad.xyz/technical-discussion/why-monad-decentralization-+-performance): summarizing some of the existing bottlenecks in maintaining shared global state in Ethereum, and how Monad addresses them
      
  
  - [Consensus](https://docs.monad.xyz/technical-discussion/consensus): a summary of the novel aspects of Monad's mempool and consensus layers
      
  
  - [Execution](https://docs.monad.xyz/technical-discussion/execution): a summary of how transactions are executed in Monad, as well as how state is stored
      
  
  - [Transaction lifecycle](https://docs.monad.xyz/technical-discussion/transaction-lifecycle-in-monad): a walkthrough of the lifecycle of a transaction
      
  
  
  
  Monad enables pipelining and optimization in four major areas to enable exceptional Ethereum Virtual Machine performance and materially advance the decentralization/scalability tradeoff. If you'd like to focus on those areas, please see the relevant pages below:
  
  - [MonadBFT](https://docs.monad.xyz/technical-discussion/consensus/monadbft): pipelined HotStuff consensus with additional research improvements
      
  
  - [Deferred Execution](https://docs.monad.xyz/technical-discussion/consensus/deferred-execution): consensus-execution staging
      
  
  - [Parallel Execution](https://docs.monad.xyz/technical-discussion/execution/parallel-execution)
      
  
  - [MonadDb](https://docs.monad.xyz/technical-discussion/execution/monaddb): high-performance state backend for merkle trie storage`,
};
