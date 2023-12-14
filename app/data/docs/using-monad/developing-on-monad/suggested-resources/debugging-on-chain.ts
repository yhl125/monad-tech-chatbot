import { Document } from "langchain/document";

export const debuggingOnChain: Document<Record<string, any>> = {
  metadata: {
    source:
      "https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/debugging-on-chain",
  },
  pageContent: `# Debugging on-chain

  ## 
  
  Transaction introspection/tracing[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/debugging-on-chain#transaction-introspection-tracing)
  
  - [Tenderly](https://dashboard.tenderly.co/explorer)
      
  
  - [EthTx Transaction Decoder](https://ethtx.info/)
      
  
  - [https://openchain.xyz/](https://openchain.xyz/)
      
  
  - [Bloxy](https://bloxy.info/)
      
  
  - [https://github.com/naddison36/tx2uml](https://github.com/naddison36/tx2uml) - OS tools for generating UML diagrams
      
  
  - [https://github.com/apeworx/evm-trace](https://github.com/apeworx/evm-trace) - tracing tools
      
  
  ## 
  
  Contract Decompilation[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/debugging-on-chain#contract-decompilation)
  
  - [https://oko.palkeo.com/](https://oko.palkeo.com/): a hosted version of the [Panoramix](https://github.com/palkeo/panoramix) decompiler

  `,
};
