import { Document } from "langchain/document";

export const evmBehavior: Document<Record<string, any>> = {
  metadata: {
    source:
      "https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/evm-behavior",
  },
  pageContent: `# EVM behavior

  ## 
  
  EVM behavioral specification[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/evm-behavior#evm-behavioral-specification)
  
  - [Notes on the EVM](https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md): straightforward technical specification of the EVM plus some behavioral examples
      
  
  - [EVM: From Solidity to bytecode, memory and storage](https://www.youtube.com/watch?v=RxL_1AfV7N4): a 90-minute talk from Peter Robinson and David Hyland-Wood
      
  
  - [EVM illustrated](https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf): an excellent set of diagrams for confirming your mental model
      
  
  - [EVM Deep Dives: The Path to Shadowy Super-Coder](https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy)
      
  
  ## 
  
  Opcode reference[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/evm-behavior#opcode-reference)
  
  [evm.codes](https://www.evm.codes/): opcode reference (including gas costs) and an interactive sandbox for stepping through bytecode execution
  
  ## 
  
  Solidity storage layout[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/evm-behavior#solidity-storage-layout)
  
  The EVM allows smart contracts to store data in 32-byte words ("storage slots"), however the details of how complex datastructures such as lists or mappings is left as an implementation detail to the higher-level language. Solidity has a specific way of assigning variables to storage slots, described below:
  
  - [Official docs on storage layout](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html)
      
  
  - [Storage patterns in Solidity](https://programtheblockchain.com/posts/2018/03/09/understanding-ethereum-smart-contract-storage/)`,
};
