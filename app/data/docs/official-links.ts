import { Document } from "langchain/document";

export const officialLinks: Document<Record<string, any>> = {
  metadata: { source: "https://docs.monad.xyz/official-links" },
  pageContent: `# Official Links

  Website: [https://monad.xyz/](https://monad.xyz/)
  
  Twitter: [https://twitter.com/monad_xyz](https://twitter.com/monad_xyz)
  
  Substack: [https://monadlabs.substack.com/](https://monadlabs.substack.com/)
  
  Discord: [https://discord.gg/monad](https://discord.gg/monad)
  
  Jobs: [https://boards.greenhouse.io/monad](https://boards.greenhouse.io/monad)
  `,
};
