import { Document } from "langchain/document";

export const highFidelityOraclesComingToDefi: Document<Record<string, any>> = {
  metadata: { source: "https://monadlabs.substack.com/p/high-fidelity-oracles-coming-to-defi" },
  pageContent: `# High Fidelity Oracles Coming to DeFi Near You

  ### An L1 with extremely cheap gas fees enables a much more precise oracle, leading to greater capital efficiency.
  
  [![](https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc6136fd4-b357-4314-bd60-548b4609473c_2316x2895.jpeg)](https://substack.com/profile/156147483-ella)
  
  [![](https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b238428-63b5-494b-876d-2eee81906676_256x256.jpeg)](https://substack.com/profile/19356127-keone)
  
  [ELLA](https://substack.com/profile/156147483-ella)
  
   AND
  
  [KEONE](https://substack.com/@keoneh)
  
  2023. 8. 17.
  
  Share
  
  ARTICLE VOICEOVER
  
  1x
  
  0:00
  
  -5:40
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F737097b6-3151-4323-9d83-31fd5ba6a70b_1280x256.jpeg)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F737097b6-3151-4323-9d83-31fd5ba6a70b_1280x256.jpeg)
  
  ### **DeFi’s pricing network - oracles**
  
  Every day, DeFi protocols rely on oracles to secure billions of dollars of leveraged positions. These pricing oracles act as middleware, bridging off-chain or cross-chain data to protocols, and are responsible for sourcing, verifying, and submitting the requested information back to requesters via smart contracts. DeFi oracles not only provide pricing data, but also ensure that pricing is not manipulated and is on-par with CEXes.
  
  A DeFi oracle’s performance can be measured in several ways, but assuming trustworthiness and liveness, best performance measures precision and latency. That said, most oracles today update rather infrequently. This contributes to imprecision because the price will likely move in between updates.
  
  Why don’t oracles update more frequently? Because bringing data on-chain is expensive. In order to support the evolution of high-fidelity oracles, protocols and oracles need to be supported in an environment with abundant and cheap transactions.
  
  ### **Oracle mechanisms in brief**
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F258fd9af-1996-4f89-a4be-252e45428a66_888x499.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F258fd9af-1996-4f89-a4be-252e45428a66_888x499.png)
  
  Oracles are smart contracts that make off-chain data available for usage in DeFi. To form a proper mental model of an oracle, let's build one up from the basics. Consider a smart contract responsible for providing the price of ETH/USD on Binance. The simplest possible oracle has two methods: \`set()\` and \`get()\`.
  
  - \`set()\` is called by a data provider observing the Binance ETH/USD price and attesting to it. In the simplest, most centralized oracle solution, this method would be permissioned to allow only a single actor to call this method.
      
  - \`get()\` is called by anyone who wants to look up the Binance ETH/USD price for downstream purposes, such as in a lending protocol. This could be used (for example) to allow someone to deposit Ether and borrow USDC against that deposit; the oracle pricing would protect the lending protocol by ensuring that the value of the deposits exceeds the value of the loan.
      
  
  The above setup, which is the simplest possible oracle, requires trust in the single data provider. It also requires that the data provider regularly update its prices. The fact that the data provider pushes prices onto the blockchain is why we refer to this model as "**push"**.
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3c9b2359-0a8d-424c-b212-dd87c4339c4a_1664x384.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3c9b2359-0a8d-424c-b212-dd87c4339c4a_1664x384.png)
  
  To decentralize this, we could allow a larger set of data providers to provide attestations. Those multiple datapoints could be aggregated off-chain (with a middleman relayer calling \`set()\` to push the aggregated price and aggregate signatures on-chain). Or, they could be aggregated on-chain (i.e. within the logic of the \`set()\` method). Either way though, the model is expensive because prices need to be updated frequently (lest they become stale and inaccurate) but each \`set()\` function consumes gas.
  
  It's worth mentioning that as a method to partially address this problem, some oracles, such as [Pyth](https://docs.pyth.network/documentation/how-pyth-works), have introduced a "pull" model for balancing the tradeoff between gas cost and update frequency. In the **pull model**, data is frequently updated in an off-chain price service, which users query to get the latest signed update. When users want to interact with a protocol that requires an updated price, they submit the latest signed update to the oracle contract (which updates the price and a last-updated timestamp) prior to calling the function which calls the oracle \`get()\` method.
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0b8a7f5a-44c3-49cd-8bf3-e2ff9ab464d8_1664x470.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0b8a7f5a-44c3-49cd-8bf3-e2ff9ab464d8_1664x470.png)
  
  The pull model ensures that prices have been updated fairly recently before being consulted, but offloads some of the gas costs onto users. Processes that run periodically (such as a process that occasionally checks the health of each position in a lending protocol) need to pull prices prior to running. Ultimately, the more precision needed in pricing, the more frequently oracle prices need updating on-chain. **This makes reasonable gas prices imperative, since an oracle with 100 data feeds updating every 10 seconds requires 864,000 updates per day.**
  
  ### High-fidelity oracles means higher capital efficiency
  
  **Regardless of push or pull, most models experience the same inefficiencies which include high latency and imprecision due to a main underlying constraint - how expensive on-chain price updates are.** Frequent oracle updates are prohibitively expensive on today’s L1s, while reducing the cost of running an oracle comes at the cost of price information granularity. This means in practice price updates on most DeFi protocols don’t happen very often. For example, Chainlink currently updates the ETH/USD price [around 1-2 times per hour](https://data.chain.link/ethereum/mainnet/crypto-usd/eth-usd) on Ethereum mainnet with a deviation parameter of 0.5%. Oracles may also try to reduce costs through off-chain aggregation, but downstream users suffer either way as a result of significant practical implications.
  
  Delayed pricing information for DEXes reduces protocol confidence in pricing information. Protocol designers must assign a larger margin of error to the price that the protocol sees; this conservatism leads to lower leverage ratios and less capital efficiency. For example, when a user deposits ETH as collateral and borrows BTC, the fudge factors on both prices limit the permissible amount of leverage.
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9c277313-61ca-4e6b-ac8e-d62abff5ce41_634x407.jpeg)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9c277313-61ca-4e6b-ac8e-d62abff5ce41_634x407.jpeg)
  
  Imprecise prices ultimately result in lower LTV ratios on lending protocols and lower leverage for derivatives protocols. Lack of precision in pricing could also lead to leverage traders and derivatives protocols accepting a lower maximum risk threshold. This may cause users to hesitate to interact with lending protocols, as widening price margins from delayed data can cause uncertainty about liquidation events.
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b3e04c1-6ef4-4c37-8e35-465dde71bbdb_521x500.jpeg)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b3e04c1-6ef4-4c37-8e35-465dde71bbdb_521x500.jpeg)
  
  Higher leverage is unlocked with greater price precision. Environments with extremely cheap gas fees enable more precise oracles; and more precise and lower latency oracles helps DeFi achieve higher capital efficiency, instilling greater confidence in the crypto market.
  
  A high-fidelity oracle that updates every 1-10 seconds mitigates risk, increases trading confidence, and offers better informed trading.
  
  Continue the conversation on [twitter](https://twitter.com/monad_xyz/) or in the Monad [discord](https://discord.gg/monad).
  
  \`\`\`
  Monad is a highly performant EVM-compatible Layer 1 that reaches 10,000 TPS (Transactions Per Second) and <1s Time to Finality.
  \`\`\`
  `,
};
