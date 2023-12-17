import { Document } from "langchain/document";

export const onChainLimitOrderBooks: Document<Record<string, any>> = {
  metadata: { source: "https://monadlabs.substack.com/p/on-chain-limit-order-books" },
  pageContent: `# On-Chain Limit Order Books

  ### Precise pricing, lower slippage, composable, and decentralized.
  
  [![](https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc6136fd4-b357-4314-bd60-548b4609473c_2316x2895.jpeg)](https://substack.com/profile/156147483-ella)
  
  [![](https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b238428-63b5-494b-876d-2eee81906676_256x256.jpeg)](https://substack.com/profile/19356127-keone)
  
  [ELLA](https://substack.com/profile/156147483-ella)
  
   AND
  
  [KEONE](https://substack.com/@keoneh)
  
  2023. 8. 4.
  
  Share
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1dc1dd1c-bfbd-426c-be0b-d78f1e9d9fbc_1100x220.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1dc1dd1c-bfbd-426c-be0b-d78f1e9d9fbc_1100x220.png)
  
  Since the heydey of DeFi summer, crypto traders have been transacting on DEXes like Uniswap and CEXes like Binance. However, DEXes are predominantly implemented as Automated Market Makers (AMMs), while CEXes are predominantly Limit Order Books (LOBs). A trader will typically experience that AMM pricing is simple and allows traders to avoid trusting a centralized actor with their assets, while CEX LOBs give traders consistently better pricing due to more precise liquidity from active market-makers.
  
  Although other trade-offs between the two types of exchanges, such as yield-farming on AMMs and richer information trading on LOBs, can play a role in deciding which platform to make a trade on - pricing is the ultimate name of the game. The natural question then is why don’t we take centralized exchanges and decentralize them? A decentralized LOB would be an obvious game-changer, achieving both the non-custodial benefits of dapps and better pricing offered by full order books.
  
  Let’s walk through this below.
  
  ### Automated Market-Makers: crypto-native liquidity
  
  AMMs are on-chain programs (smart contracts) that allow users to swap between pairs of assets. They do this by maintaining paired pools of liquidity which serve as a swap facility. The price of an asset is typically determined by a now famous first-generation AMM bonding curve formula \`x*y=k\`, pioneered by DEXes such as Uniswap v1/v2 (Constant Product Market Makers). There are also other flavors of AMMs such as Constant Sum Market Makers, Constant Mean Market Makers, and (more generally) Constant Function Market Makers but the concept of maintaining an invariant formula for fairly dictating asset conversion ratios remains the same.
  
  A simplified example (assuming zero fees) of how AMM pricing works in UniV2:
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa970a7c0-821f-4dce-b9b7-875b32bc2018_1219x295.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa970a7c0-821f-4dce-b9b7-875b32bc2018_1219x295.png)
  
  When transacting on AMMs, users typically provide liquidity within a specified price range, which can be relatively narrow or as wide as the full range from 0 to infinity (the latter of which is legacy UniV2 behavior). Regardless of choice, there is capital inefficiency:
  
  - with narrow ranges, much more of the capital is actionable when the price is in range, but the price is only in range infrequently;
      
  - with wide ranges, capital is spread out and most of it is not actionable at any given time.
      
  
  Since prices are constantly in flux, capital is only well-utilized on an AMM when liquidity providers use tight ranges and frequently update those ranges. However, frequent updates require significant gas on Ethereum mainnet, so providers only update their ranges very infrequently.
  
  The consequence of this capital inefficiency is greater slippage for end users. The larger the trade relative to total liquidity, the more slippage experienced which is further compounded by how shallow a pool is. Visually we can see this from the below graph of a typical \`x*y=k\` curve: the larger the swap, the further horizontally along the curve we travel, leading to a flatter diagonal (worse price).
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F08d7487b-5734-42c1-9251-b1e7c47e310b_997x715.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F08d7487b-5734-42c1-9251-b1e7c47e310b_997x715.png)
  
  For larger trades more experienced / advanced traders tend to opt for CEXes.
  
  (For spot trades Binance outperformed UniV3 (on Ethereum) daily trade volume by 18.5x, a/o Aug 3 2023 via CoinMarketCap).
  
  \`\`\`
  What is an AMM?
  
  A DEX that uses an Automated Market Maker uses smart contracts to facilitate swapping between two assets, following a formula that automatically determines the exchange rate.
  \`\`\`
  
  ### Lessons from centralized exchanges
  
  Centralized exchanges are almost exclusively implemented as limit order books. A limit order book is an ordered list of bids and offers. These orders are filled according to price-time priority - meaning that the lowest offer and highest bid get filled first - which incentivizes market-makers to compete to provide the best prices. This competition results in lower slippage for end users.
  
  _Example of an order book on Deribit for ETH/USDC spot._
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5572396-4da5-4dba-bcfa-dc0c1fc8fb0d_252x462.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5572396-4da5-4dba-bcfa-dc0c1fc8fb0d_252x462.png)
  
  Spreads can be very tight on order books because market-makers are constantly adjusting their orders in response to supply/demand and new information. This means that market-makers are sending a lot of fresh orders to the exchange throughout the course of the day.
  
  Centralized exchanges Binance and Coinbase remain the top two crypto exchanges by spot trade volume while Deribit is the preferred choice for most institutional crypto options trading.
  
  \`\`\`
  What is a CEX?
  
  A centralized exchange for trading that utilizes a central limit order book filling orders according to price-time priority.
  \`\`\`
  
  ### On-chain limit order books FTW ✌️
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b116ef1-133f-4edd-bd95-c9c95372c13b_428x276.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b116ef1-133f-4edd-bd95-c9c95372c13b_428x276.png)
  
  For frequent traders, it can be tricky to balance the tradeoff between execution quality and the risk of entrusting funds to a centralized entity.
  
  A decentralized LOB has the potential to offer the best of both worlds between AMMs and centralized exchanges: excellent execution quality while allowing users to retain custody of their assets.
  
  At present the main challenge in implementing LOBs on chain is the lack of an environment with sufficiently cheap gas and plentiful transactions. LOBs require cheap and frequent transactions because market-makers frequently adjust their quotes. The new generation of high-TPS (>2k) blockchains are gradually making fully on-chain LOBs more feasible. This has led to few notable examples of on-chain LOBs including Econia (Aptos), DeepBook (Sui), and OpenBook/Serum (Solana).
  
  A second hurdle to full-capacity LOBs is running one at scale on EVM. An EVM-compatible LOB would not only offer decentralized trading at low slippage but also provide opportunities for composability with the wider range of EVM apps.
  
  \`\`\`
  What is a decentralized LOB?
  
  A fully on-chain limit order book that matches orders on-chain using price-time priority order matching.
  \`\`\`
  
  Ultimately, if DeFi is to overtake CeFi, it needs to offer a comparable or better user experience. And for traders, a big part of user experience is execution quality. On-chain LOBs are a crucial part of narrowing the execution gap between DeFi and CeFi.
  
  \`\`\`
  Monad is a highly performant EVM-compatible Layer 1 that reaches 10,000 TPS (Transactions Per Second) and <1s Time to Finality.
  \`\`\`
  
  Continue the conversation on [twitter](https://twitter.com/monad_xyz/status/1687137864780283904) or in the Monad [discord](https://discord.gg/monad).
  `,
};
