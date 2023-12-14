import { Document } from "langchain/document";

export const pipelining: Document<Record<string, any>> = {
  metadata: {
    source: "https://docs.monad.xyz/technical-discussion/concepts/pipelining",
  },
  pageContent: `# Pipelining

  _Pipelining_ is a technique for implementing parallelism by dividing tasks into a series of smaller tasks which can be processed in parallel.
  
  Pipelining is used in computer processors to increase the throughput of executing a series of instructions sequentially at the same clock rate. (There are other techniques used in processors to increase throughput as well.) More about instruction-level parallelism (ILP) can be read [here](https://en.wikipedia.org/wiki/Instruction_pipelining).
  
  A simple example of pipelining:
  
  ![](https://3994890198-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F1aIn9gLWMNwsRTCNl9En%2Fuploads%2FSHtBHs8wG6hzbstZUuqR%2Fimage.png?alt=media&token=c6a54af5-4a5a-4437-986a-fda3fada0f72)
  
  Pipelining laundry day. Top: naive; bottom: pipelined. Credit: [Prof. Lois Hawkes, FSU](https://www.cs.fsu.edu/~hawkes/cda3101lects/chap6/index.html?$$$F6.1.html$$$)​
  
  When doing four loads of laundry, the naive strategy is to wash, dry, fold, and store the first load of laundry before starting on the second one. The pipelined strategy is to start washing load 2 when load 1 goes into the dryer. Pipelining gets work done more efficiently by utilizing multiple resources simultaneously.`,
};
