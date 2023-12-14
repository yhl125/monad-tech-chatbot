import { Document } from "langchain/document";

export const otherDetails: Document<Record<string, any>> = {
  metadata: {
    source: "https://docs.monad.xyz/technical-discussion/other-details",
  },
  pageContent: `# Other details

  ## 
  
  Accounts[](https://docs.monad.xyz/technical-discussion/other-details#accounts)
  
  Accounts in Monad are identical to [Ethereum accounts](https://ethereum.org/en/developers/docs/accounts/). Accounts use the same address space (20-byte addresses using ECDSA). As in Ethereum, there are Externally-Owned Accounts (EOAs) and Contract Accounts.
  
  
  
  ## 
  
  Transactions[](https://docs.monad.xyz/technical-discussion/other-details#transactions)
  
  The transaction format in Monad [matches Ethereum](https://ethereum.org/en/developers/docs/transactions/), i.e. it complies with [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718), and transactions are encoded with [RLP](https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/).
  
  Access lists ([EIP-2930](https://eips.ethereum.org/EIPS/eip-2930)) are supported but not required.
  
  
  
  ## 
  
  Linearity of Blocks and Transactions[](https://docs.monad.xyz/technical-discussion/other-details#linearity-of-blocks-and-transactions)
  
  Blocks are still linear, as are transactions within a block. Parallelism is utilized strictly for efficiency; it never affects the true outcome or end state of a series of transactions.
  
  
  
  ## 
  
  Gas[](https://docs.monad.xyz/technical-discussion/other-details#gas)
  
  [Gas](https://ethereum.org/en/developers/docs/gas/) (perhaps more clearly named "compute units") functions as it does in Ethereum, i.e. each opcode costs a certain amount of gas. Gas costs per opcode are identical to Ethereum in Monad, although this is subject to change in the future.
  
  When a user submits a transaction, they include a gas limit (a max number of units of gas that this function call can consume before erroring) as well as a gas price (a bid, in units of native token, per unit of gas).
  
  Leaders in the default Monad client use a priority gas auction (PGA) to order transactions, i.e. they order transactions in descending gas price order. In future times there may be alternative mechanisms for transaction ordering. The choice of order is orthogonal to everything that happens downstream; valid choice of order is not enshrined into the Monad protocol.
  
  `,
};
