import { Document } from "langchain/document";

export const huffResources: Document<Record<string, any>> = {
  metadata: {
    source:
      "https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/other-languages/huff-resources",
  },
  pageContent: `# Huff resources

  [Huff](https://docs.huff.sh/) is most closely described as EVM assembly. Unlike Yul, Huff does not provide control flow constructs or abstract away the inner working of the program stack. Only the most upmost performance sensitive applications take advantage of Huff, however it is a great educational tool to learn how the EVM interprets instructions its lowest level.
  
  - [Huff resources](https://docs.huff.sh/resources/overview/) provides additional resources
      
  `,
};
