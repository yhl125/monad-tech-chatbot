import { Document } from "langchain/document";

export const briefings: Document<Record<string, any>> = {
  metadata: { source: "https://docs.monad.xyz/briefings" },
  pageContent: `# Briefings

  Here are several versions of the same briefing, depending on the user's knowledge of / interest in blockchain systems:
  
  - [Monad for users](https://docs.monad.xyz/briefings/monad-for-users)
      
  
  - [Monad for developers](https://docs.monad.xyz/briefings/monad-for-developers)`,
};
