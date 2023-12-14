import { Document } from "langchain/document";

export const suggestedResources: Document<Record<string, any>> = {
  metadata: {
    source:
      "https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources",
  },
  pageContent: `# Suggested Resources

  Monad is fully EVM bytecode-compatible, with all supported opcodes and precompiles as of the [Shanghai fork](https://www.evm.codes/?fork=shanghai). Monad also preserves the standard Ethereum JSON-RPC interfaces.
  
  As such, most development resources for Ethereum Mainnet apply to development on Monad.
  
  This page suggests a **minimal** set of resources for getting started with building a decentralized app for Ethereum. Child pages provide additional detail or options.
  
  As [Solidity](https://docs.soliditylang.org/) is the most popular language for Ethereum smart contracts, the resources on this page focus on Solidity; alternatively see resources on [Vyper](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/other-languages/vyper-resources) or [Huff](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/other-languages/huff-resources). Note that since smart contracts are composable, contracts originally written in one language can still make calls to contracts in another language.
  
  ## 
  
  **IDEs**[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources#ides)
  
  - [Remix](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null) is an interactive Solidity IDE. It is the easiest and fastest way to get started coding and compiling Solidity smart contracts without the need for additional tool installations.
      
  
  - [VSCode](https://code.visualstudio.com/) + [Solidity extension](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity)
      
  
  ## 
  
  **Basic Solidity**[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources#basic-solidity)
  
  - [CryptoZombies](https://cryptozombies.io/en/course) is a great end-to-end introduction to building dApps on the EVM. It provides resources and lessons for anyone from someone who has never coded before, to experienced developers in other disciplines looking to explore blockchain development.
      
  
  - [Solidity by Example](https://solidity-by-example.org/) introduces concepts progressively through simple examples; best for developers who already have basic experience with other languages.
      
  
  ## 
  
  **Intermediate Solidity**[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources#intermediate-solidity)
  
  - [The Solidity Language](https://docs.soliditylang.org/en/v0.8.21/introduction-to-smart-contracts.html) official documentation is an end-to-end description of Smart Contracts and blockchain basics centered on EVM environments. In addition to Solidity Language documentation, it covers the basics of compiling your code for deployment on an EVM as well as the basic components relevant to deploying a Smart Contract on an EVM.
      
  
  - [Solidity Patterns](https://github.com/fravoll/solidity-patterns) repository provides a library of code templates and explanation of their usage.
      
  
  - The [Uniswap V2](https://github.com/Uniswap/v2-core) contract is a professional yet easy to digest smart contract that provides a great overview of an in-production Solidity dApp. A guided walkthrough of the contract can be found [here](https://ethereum.org/en/developers/tutorials/uniswap-v2-annotated-code/).
      
  
  - [Cookbook.dev](https://www.cookbook.dev/search?q=cookbook&categories=Contracts&sort=popular&filter=&page=1) provides a set of interactive example template contracts with live editing, one-click deploy, and an AI chat integration to help with code questions.
      
  
  - [OpenZeppelin](https://www.openzeppelin.com/contracts) provides customizable template contract library for common Ethereum token deployments such as ERC20, ERC712, and ERC1155. Note, they are not gas optimized.
      
  
  ## 
  
  **Advanced Solidity**[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources#advanced-solidity)
  
  - The [Solmate repository](https://github.com/transmissions11/solmate) and [Solady repository](https://github.com/Vectorized/solady/tree/main) provide gas-optimized contracts utilizing Solidity or Yul.
      
  
  - [Yul](https://docs.soliditylang.org/en/latest/yul.html) is a intermediate language for Solidity that can generally be thought of as inline assembly for the EVM. It is not quite pure assembly, providing control flow constructs and abstracting away the inner working of the stack while still exposing the raw memory backend to developers. Yul is targeted at developers needing exposure to the EVM's raw memory backend to build high performance gas optimized EVM code.
      
  
  - [Huff](https://docs.huff.sh/get-started/overview/) is most closely described as EVM assembly. Unlike Yul, Huff does not provide control flow constructs or abstract away the inner working of the program stack. Only the most upmost performance sensitive applications take advantage of Huff, however it is a great educational tool to learn how the EVM interprets instructions its lowest level.
      
  
  ## 
  
  **Local nodes**[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources#local-nodes)
  
  Developers often find it helpful to be able to run a 1-node Ethereum network with modified parameters to test interaction with the blockchain:
  
  - [Anvil](https://github.com/foundry-rs/foundry/tree/master/crates/anvil) is a local Ethereum node packaged in the Foundry toolkit
      
  
  - [Hardhat Network](https://hardhat.org/hardhat-network/docs/overview) is a local Ethereum node packaged in the Hardhat toolkit
      
  
  Installation is most easily done as part of installing the respective toolkit, described in the next section.
  
  ## 
  
  Toolkits[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources#toolkits)
  
  Developers often find it helpful to build their project in the context of a broader framework that organizes external dependencies (i.e. package management), organizes unit and integration tests, defines a deployment procedure (against local nodes, testnet, and mainnet), records gas costs, etc.
  
  Here are the two most popular toolkits for Solidity development:
  
  - [Foundry](https://book.getfoundry.sh/) is a Solidity framework for both development and testing. Foundry manages your dependencies, compiles your project, runs tests, deploys, and lets you interact with the chain from the command-line and via Solidity scripts. Foundry users typically write their smart contracts and tests in the Solidity language.
      
  
  - [Hardhat](https://hardhat.org/docs) is a Solidity development framework paired with a JavaScript testing framework. It allows for similar functionality as Foundry, and was the dominant toolchain for EVM developers prior to Foundry.
      
  
  ## 
  
  **Interacting with the Ethereum RPC API**[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources#interacting-with-the-ethereum-rpc-api)
  
  Frontends for dapps typically use JavaScript or Python to submit read or write queries to an RPC node. This code is typically referred to as the "client side", as web developers can roughly equate the blockchain to a backend server.
  
  A few libraries provide standard methods for submitting queries or transactions to an RPC node:
  
  - Python:
      
      - [web3.py](https://web3py.readthedocs.io/en/stable/)
          
      
  
  - Javascript:
      
      - [web3.js](https://web3js.readthedocs.io/)
          
      
      - [ethers.js](https://docs.ethers.org/) To this end [Web3.js](https://web3js.readthedocs.io/en/v1.10.0/getting-started.html) and [Web3.py](https://web3py.readthedocs.io/en/stable/quickstart.html), Java Script and Python libraries respectively, have developed to make interacting with blockchains more intuitive for web developers.
          
      
  
  Here is a quick example for creating a frontend: [create-eth-app](https://github.com/PaulRBerg/create-eth-app).
  
  ## 
  
  Testnets[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources#testnets)
  
  Monad Testnet will be available for developers in the coming months, however, being bytecode and RPC compatible with the EVM means developers wishing to deploy on Monad can preliminary use [Ethereum's Testnets](https://ethereum.org/en/developers/docs/networks/).
  
  
  
  ## 
  
  Further details[](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources#further-details)
  
  Child pages add additional resources:
  
  - [EVM behavior](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/evm-behavior)
      
  
  - [Further Solidity resources](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/further-solidity-resources)
      
  
  - [Debugging on-chain](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/debugging-on-chain)
      
  
  - [Other languages](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/other-languages)
      
      - [Vyper](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/other-languages/vyper-resources)
          
      
      - [Huff](https://docs.monad.xyz/using-monad/developing-on-monad/suggested-resources/other-languages/huff-resources)
  `,
};
