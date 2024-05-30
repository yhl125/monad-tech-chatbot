import { Document } from "langchain/document";

export const mitigatingMev: Document<Record<string, any>> = {
  metadata: { source: "https://monadlabs.substack.com/p/mitigating-mev-a-core-protocol-approach" },
  pageContent: `# Mitigating MEV: a core-protocol approach

  ### To reduce user loss, reduce the cost of transacting!
  
  [![](https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc6136fd4-b357-4314-bd60-548b4609473c_2316x2895.jpeg)](https://substack.com/profile/156147483-ella)
  
  [![](https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b238428-63b5-494b-876d-2eee81906676_256x256.jpeg)](https://substack.com/profile/19356127-keone)
  
  [ELLA](https://substack.com/profile/156147483-ella)
  
  AND
  
  [KEONE](https://substack.com/@keoneh)
  
  2023. 10. 12.
  
  Share
  
  # Mitigating MEV: a core-protocol approach
  
  Much discussion in the blockchain and app design space has focused on “minimizing MEV” - i.e. minimizing the value that is extractable from users through transaction reordering. While the mechanics of reordering, and new designs that are potentially more resilient to reordering, is an interesting concern, we think that an equally-important question to address is _why_ users submit transactions that give up so much value, and what can be done to allow them to reduce the amount of value they give up.
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F503a4fcd-c116-4178-89fd-6f62e34217fd_1170x350.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F503a4fcd-c116-4178-89fd-6f62e34217fd_1170x350.png)
  
  [https://twitter.com/toghrulmaharram/status/1706558384005103730](https://twitter.com/toghrulmaharram/status/1706558384005103730)
  
  ### Focusing on the user’s protocol costs
  
  When users transact against decentralized apps, they don’t just pay transaction fees to validators to execute the transaction. They also pay a **protocol cost** — some economic value, either directly or in expectation, to other users of the protocol. On AMMs, the protocol cost is expressed as “**slippage tolerance**” and is paid upfront. On lending protocols, it’s the “**liquidation penalty**” and a cost in expectation, paid only if the user is liquidated. Although these tolerances differ mechanically, they’re similar in that they define the user’s willingness to accept a cost in order to take an action which might have other positive downstream effects.
  
  Decentralized apps can deliver more value to many users if protocol costs can be minimized.
  
  ### Minimizing slippage tolerance
  
  In trading, slippage defines how different the user’s execution price differs from the current fair value. When submitting a trade, the user specifies the worst price they are willing to accept in making that trade.
  
  In DeFi right now, users must submit trades with large slippage tolerances, because relatively small trades still incur fairly large amounts of slippage.
  
  Why is this? It is because most trades in DeFi occur against Automated Market Makers (AMMs), and liquidity on an AMM is mostly not concentrated near top-of-book. And why is this? It is because prices are constantly fluctuating, and maintaining most of one’s liquidity near top-of-book would require frequent updates. On most blockchains, those frequent updates are expensive.
  
  If it were feasible to update one’s quotes frequently and cheaply, either on [order books](https://monadlabs.substack.com/p/on-chain-limit-order-books) or even on concentrated-liquidity AMMs, then market makers would compete with each other to quote tightly, leading to tighter markets with more liquidity near fair value. This would lead to less slippage for end users.
  
  We can state this improvement in MEV terms as well. Backrunning AMM trades that created too much impact (reverting the price to fair value) is a major source of MEV. Reducing the impact of trades will reduce the backrunning opportunity.
  
  ### Minimizing liquidation penalties with more granular oracle updates
  
  Lending protocols allow a borrower Bob to deposit an asset and borrow a different asset against their deposit. The protocol allows a lower value to be borrowed than was deposited; the ratio of these two amounts is the “Loan-to-Value (LTV) ratio”. Both the collateral and the debt are priced using an [oracle](https://monadlabs.substack.com/p/high-fidelity-oracles-coming-to-defi) price.
  
  If Bob’s collateral loses value (or the value of Bob’s debt increases), the LTV ratio increases. If the value gets too close to 1, the protocol is in danger of having bad debt so it reduces risk by allowing another user, Larry the “liquidator”, to turn in the borrowed asset on behalf of Bob and receive some of Bob’s collateral. In order to incentivize Larry to do this, the protocol gives Larry a bit more value back (in units of collateral) than he puts in (in units of debt). The excess value is referred to as the “**liquidation penalty**”.
  
  Top lenders on Ethereum such as MakerDAO follow an auction-based liquidation process, whilst Aave, Compound, and dYdX operate under a fixed spread liquidation model. The liquidation penalty on Aave is [5%](https://docs.aave.com/faq/liquidations). The liquidation penalty on Compound ranges from [3% to 12%](https://app.compound.finance/markets/usdc-mainnet).
  
  Why is the liquidation penalty so large? It stems largely from imprecision in the oracle price.
  
  Liquidators will only liquidate a position if it has positive expected value for the liquidator to take action. However, the terms offered to the liquidator are based on oracle pricing, which might be out of date since oracles on mainnet only update on fairly large price moves (see a further discussion of [this](https://monadlabs.substack.com/p/high-fidelity-oracles-coming-to-defi)). In order to be sure that liquidators are being offered terms that they are likely to take, the liquidation penalty needs to price in a fudge factor; a sizable liquidation penalty serves this purpose.
  
  With more precise oracles, lending protocols could reduce the liquidation penalty. But more precise oracles require cheaper transaction fees.
  
  ### It’s All Gas Efficiency
  
  Slippage tolerance and liquidation penalty are both examples of protocol costs that ultimately stem from high transaction fees. First-order costs on liquidity providers and oracle data providers result in second-order costs on users.
  
  To reduce user loss, reduce the cost of transacting!
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff4c2b3f6-0e28-4f68-bdf4-b9040bf21d56_1116x748.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff4c2b3f6-0e28-4f68-bdf4-b9040bf21d56_1116x748.png)
  
  Continue the conversation on [twitter](https://twitter.com/monad_xyz/) or in the Monad [discord](https://discord.gg/monad).
  
  \`\`\`
  Monad is a highly performant EVM-compatible Layer 1 that reaches 10,000 TPS (Transactions Per Second) and <1s Time to Finality.
  \`\`\`
  `,
};
