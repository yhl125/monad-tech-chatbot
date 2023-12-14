import { Document } from "langchain/document";

export const consensus: Document<Record<string, any>> = {
  metadata: { source: "https://docs.monad.xyz/technical-discussion/consensus" },
  pageContent: `# Consensus

  Understanding Monad's consensus requires understanding of a few key areas:
  
  - [MonadBFT](https://docs.monad.xyz/technical-discussion/consensus/monadbft): Monad's consensus mechanism for achieving agreement about an arbitrary payload under partially synchronous conditions while maintaining Byzantine fault tolerance.
      
  
  - [Shared Mempool](https://docs.monad.xyz/technical-discussion/consensus/shared-mempool): Defining a significant optimization to the consensus payload: referring to transactions by hash, and ensuring that transactions are propagated through the mempool ahead of time.
      
  
  - [Deferred Execution](https://docs.monad.xyz/technical-discussion/consensus/deferred-execution): Defining a significant optimization to the process of coming to consensus, which is moving execution out of the hot path of consensus.
      
  
  - [Carriage Cost and Reserve Balance](https://docs.monad.xyz/technical-discussion/consensus/carriage-cost-and-reserve-balance): Defining a behavioral change to transaction pricing which is required to defend against spam given that consensus is done over a delayed view of execution.`,
};
