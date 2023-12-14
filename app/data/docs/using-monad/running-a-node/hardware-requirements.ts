import { Document } from "langchain/document";

export const hardwareRequirements: Document<Record<string, any>> = {
  metadata: {
    source:
      "https://docs.monad.xyz/using-monad/running-a-node/hardware-requirements",
  },
  pageContent: `# Hardware requirements

  The following hardware requirements are expected to run a Monad full node:
  
  - CPU: 16 core CPU
      
  
  - Memory: 32 GB RAM
      
  
  - Storage: 2 TB NVMe SSD
      
  
  - Bandwidth: 100 Mb/s
  `,
};
