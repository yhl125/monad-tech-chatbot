import { Document } from "langchain/document";

export const concepts: Document<Record<string, any>> = {
  metadata: { source: "https://docs.monad.xyz/technical-discussion/concepts" },
  pageContent: `Concepts
  Here are the articles in this section:
  Pipelining
  Asynchronous I/O
  `,
};
