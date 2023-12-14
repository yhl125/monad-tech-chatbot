import { Document } from "langchain/document";

export const introduction: Document<Record<string, any>> = {
  metadata: { source: "https://docs.monad.xyz" },
  pageContent: `# Introduction

  Monad is a high-performance Ethereum-compatible L1. Monad materially advances the efficient frontier in the tradeoff between decentralization and scalability.
  
  Monad introduces optimizations in four major areas, resulting in a blockchain with throughput of 10,000 transactions per second (tps):
  
  - [MonadBFT](https://docs.monad.xyz/technical-discussion/consensus/monadbft)
      
  
  - [Deferred Execution](https://docs.monad.xyz/technical-discussion/consensus/deferred-execution)
      
  
  - [Parallel Execution](https://docs.monad.xyz/technical-discussion/execution/parallel-execution)
      
  
  - [MonadDb](https://docs.monad.xyz/technical-discussion/execution/monaddb)
      
  
  Monad's improvements address existing bottlenecks while preserving seamless compatibility for application developers (full EVM bytecode compatibility) and users (Ethereum RPC API compatibility). As a result, the rich landscape of Ethereum tooling and applied cryptography research can plug seamlessly into Monad while benefiting from improved throughput and scale:
  
  - applications (any dapp built for Ethereum)
      
  
  - developer tooling (e.g. Hardhat, Apeworx, Foundry)
      
  
  - wallets (e.g. MetaMask)
      
  
  - analytics/indexing (e.g. Etherscan, Dune)
      
  
  The Monad client is built with a focus on performance and is written from scratch in C++ and Rust. The subsequent pages survey the major changes in Monad as well as the interface for users.`,
};
