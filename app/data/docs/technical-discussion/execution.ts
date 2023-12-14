import { Document } from "langchain/document";

export const execution: Document<Record<string, any>> = {
  metadata: { source: "https://docs.monad.xyz/technical-discussion/execution" },
  pageContent: `# Execution

  Monad's execution improvements come in a few key areas:
  
  - [Optimistic parallel execution](https://docs.monad.xyz/technical-discussion/execution/parallel-execution): parallel execution of transactions while committing results in the original order
      
  
  - [MonadDb](https://docs.monad.xyz/technical-discussion/execution/monaddb): high-performance state storage backend`,
};
