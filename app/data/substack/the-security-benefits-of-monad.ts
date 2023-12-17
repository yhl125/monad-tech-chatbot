import { Document } from "langchain/document";

export const securityBenefitsOfMonad: Document<Record<string, any>> = {
  metadata: { source: "https://monadlabs.substack.com/p/the-security-benefits-of-monad-7884c4c9b398" },
  pageContent: `# The Security Benefits of Monad

  [![](https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b238428-63b5-494b-876d-2eee81906676_256x256.jpeg)](https://substack.com/profile/19356127-keone)
  
  [KEONE](https://substack.com/@keoneh)
  
  2023. 3. 2.
  
  Share
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa5f0a9f9-9a59-4fe7-bf5d-9b56a2c8cc18_1400x500.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa5f0a9f9-9a59-4fe7-bf5d-9b56a2c8cc18_1400x500.png)
  
  In the past 3 years, over [four billion dollars](https://rekt.news/leaderboard/) of assets have been lost due to on-chain exploits; these losses serve as one of the largest deterrents to the mainstream adoption of decentralized apps. A major contributor to this problem is that implementing security measures in smart contracts on Ethereum is expensive. In the battle to minimize gas costs for users, Ethereum developers frequently feel pressure to forego additional safety checks.
  
  Examples of gas optimizations include:
  
  - Limiting the use of defensive assertions and only including code essential for app functionality. Defensive assertions are essential to preserving invariants, especially as code gets upgraded.
      
  - Using counterintuitive tricks that save gas at the cost of readability. Tricks like making [any function payable](https://twitter.com/samczsun/status/1469477928350240771), using [mappings](https://twitter.com/krzKaczor/status/1395098321736409089) in place of arrays, and avoiding [libraries](https://twitter.com/Mudit__Gupta/status/1474015257945264128) make code harder to understand and increase the probability of errors during upgrades.
      
  - Using shortcuts that minimize on-chain interaction, when a more interactive design might have offered better security properties. For example, the original ERC-20 design was that users would approve an app for a specific amount of tokens, but in practice, most frontends request [infinite approvals](https://twitter.com/larry0x/status/1466415608308850696), in part to avoid repeated gas expenditures for users.
      
  
  With roughly 250 billion dollars of [value secured on Ethereum](https://ultrasound.money/#tvs) in ERC-20s and NFTs, the stakes for contract security are exceptionally high. In Monad, we substantially reduce the cost of gas, rendering most current gas optimizations unnecessary, and allowing developers to focus on building the best version of their apps.
  
  ### Background: Ethereum’s Gas Model
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8018b454-b53a-4898-a0c1-764abaa205c3_1400x500.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8018b454-b53a-4898-a0c1-764abaa205c3_1400x500.png)
  
  In Ethereum, each opcode costs a certain number of compute units, aka gas. The more computation, the more gas consumed. When users call a function on a smart contract, they pay for the gas consumed by the opcodes in that function.
  
  Since computational resources on Ethereum are extremely limited, every operation is quite expensive. Reducing the number of operations while still preserving functionality is thus important in lowering user costs. These optimizations take a few forms, each of which comes with its pitfalls.
  
  ### Defensive assertions are valuable
  
  Experienced developers include defensive assertions to guard against unexpected scenarios. Like the name sounds, a defensive assertion is a way of codifying an expectation that should always be true. For example, if an internal variable is always expected to be nonnegative, then the programmer could write require(var >= 0, 'encountered negative var') and know that if this is ever not true, the transaction will revert. This defends against hacks which leverage unexpected scenarios.
  
  [Many](https://rekt.news/fei-rari-rekt/) [of](https://twitter.com/CreamdotFinance/status/1432249771750686721?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1432249771750686721%7Ctwgr%5E5881fe701f19565d07d43f7f4c7f3a593d956c40%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fcointelegraph.com%2Fnews%2Fcream-finance-defi-platform-loses-19m-in-a-flash-loan-hack) [the](https://blog.openzeppelin.com/exploiting-uniswap-from-reentrancy-to-actual-profit/) [biggest](https://valid.network/post/the-reentrancy-strikes-again-the-case-of-lendf-me) [exploits](https://hackingdistributed.com/2016/06/18/analysis-of-the-dao-exploit/) in DeFi are re-entrancy attacks. In a [re-entrancy attack](https://medium.com/amber-group/preventing-re-entrancy-attacks-lessons-from-history-c2d96480fac3), a smart contract gets into an unexpected state, usually after being called recursively by a cleverly-constructed contract that exploits some logical bug. Core to a re-entrancy attack is the fact that the contract gets into a bad state but doesn’t realize it. “Realizing it” would be achieved using defensive assertions.
  
  Even beyond re-entrancy avoidance, defensive assertions help avoid the occasional bonehead mistake. For example, it is a common mistake to send tokens to the wrapped Ether (WETH) contract, where they become permanently stuck. There are frequent [discussions](https://twitter.com/Analytic_ETH/status/1487961665874415620) to add additional checks that block this, but these checks would cost more gas, which is worse for non-erroneous users.
  
  [
  
  ![Twitter avatar for @YannickCrypto](https://substackcdn.com/image/twitter_name/w_96/YannickCrypto.jpg)
  
  yannickcrypto.eth @YannickCrypto
  
  @CryptoSWAZI @HawkBeetz This would need a extra require check that cost 50 gas, there are 90.000.000 weth transfers, that would be 400 ETH extra gas cost at 100 gwei and a function that allows the owner to withdraw the funds looks sketchy and in decentrality is no owner!
  
  ](https://twitter.com/YannickCrypto/status/1487837906538483715)[
  
  5:19 PM ∙ Jan 30, 2022
  
  ---
  
  3Likes1Retweet
  
  
  
  ](https://twitter.com/YannickCrypto/status/1487837906538483715)
  
  Over [a million dollars in assets](https://etherscan.io/tokenholdings?a=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) have been lost on the WETH contract alone due to the lack of these safeguards.
  
  ### Micro-optimizations reduce legibility
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe39495ae-2e6c-4045-abaf-3e8fe7614fe5_1400x500.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe39495ae-2e6c-4045-abaf-3e8fe7614fe5_1400x500.png)
  
  There are a variety of weird tricks that save gas, arguably at the cost of legibility. Here are a few examples:
  
  Marking a function as ‘payable’ (even if it’s not intended as such) reduces gas:
  
  [
  
  ![Twitter avatar for @Mudit__Gupta](https://substackcdn.com/image/twitter_name/w_96/Mudit__Gupta.jpg)
  
  Mudit Gupta @Mudit__Gupta
  
  Solidity pro tip: Functions marked as payable are 24 GAS cheaper than their counterpart. Payable go brrrrr! In non-payable functions, Solidity adds an extra check to ensure msg.value is zero. It's right on the top in the list of dumbest things that Solidity does.
  
  ![Image](https://substackcdn.com/image/fetch/w_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fpbs.substack.com%2Fmedia%2FFJNoO0cagAQHeVq.png)
  
  
  
  ](https://twitter.com/Mudit__Gupta/status/1482643410834300931)[
  
  9:18 AM ∙ Jan 16, 2022
  
  ---
  
  459Likes61Retweets
  
  
  
  ](https://twitter.com/Mudit__Gupta/status/1482643410834300931)
  
  [
  
  ![Twitter avatar for @samczsun](https://substackcdn.com/image/twitter_name/w_96/samczsun.jpg)
  
  samczsun @samczsun
  
  @transmissions11 @cupidhack @libevm @dapptools the deployment bytecode doesnt have to check that callvalue is zero, fallthrough to invalid, jump to codecopy. cuts out 10 opcodes
  
  ](https://twitter.com/samczsun/status/1469477928350240771)[
  
  1:23 AM ∙ Dec 11, 2021
  
  ---
  
  37Likes3Retweets
  
  
  
  ](https://twitter.com/samczsun/status/1469477928350240771)
  
  Usage of assembly:
  
  [
  
  ![Twitter avatar for @0xkkeon](https://substackcdn.com/image/twitter_name/w_96/0xkkeon.jpg)
  
  Keon Kim @0xkkeon
  
  Everything is gas optimized in @opensea 's Seaport Protocol. I mean, look at this function that just returns a string "Seaport". Let's take a look inside 👀
  
  ![Image](https://substackcdn.com/image/fetch/w_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fpbs.substack.com%2Fmedia%2FFb_3VmHaAAIlgTA.png)
  
  
  
  ](https://twitter.com/0xkkeon/status/1567254237171847168)[
  
  8:51 PM ∙ Sep 6, 2022
  
  ---
  
  19Likes2Retweets
  
  
  
  ](https://twitter.com/0xkkeon/status/1567254237171847168)
  
  Avoiding use of external libraries:
  
  [
  
  ![Twitter avatar for @Mudit__Gupta](https://substackcdn.com/image/twitter_name/w_96/Mudit__Gupta.jpg)
  
  Mudit Gupta @Mudit__Gupta
  
  @GalloDaSballo Not necessarily but they can. If you make an external call to a library, that's a delegate call and has extra gas cost. Internal calls are inlined and actually cheaper in runtime.
  
  ](https://twitter.com/Mudit__Gupta/status/1474015257945264128)[
  
  1:53 PM ∙ Dec 23, 2021
  
  ---
  
  12Likes2Retweets
  
  
  
  ](https://twitter.com/Mudit__Gupta/status/1474015257945264128)
  
  More weird tips:
  
  [https://github.com/0xKitsune/EVM-Gas-Optimizations](https://github.com/0xKitsune/EVM-Gas-Optimizations)
  
  [https://github.com/ControlCplusControlV/Yul-Optimization-Tips](https://github.com/ControlCplusControlV/Yul-Optimization-Tips)
  
  Legibility improves understanding which improves security. Teammates and auditors need to easily understand code so they can look for vulnerabilities as well as avoid bugs when making later modifications.
  
  [
  
  ![Twitter avatar for @stonecoldpat0](https://substackcdn.com/image/twitter_name/w_96/stonecoldpat0.jpg)
  
  Patrick McCorry (💙,🧡) @stonecoldpat0
  
  Due to the gas mechanics in solidity, there is a real financial incentive for developers to write unauditable, difficult to read, and assembly-level code. Are you writing mission critical code? Stop optimising for gas efficiency, it isn't a great metric for security.
  
  ](https://twitter.com/stonecoldpat0/status/1149971603536666625)[
  
  9:19 AM ∙ Jul 13, 2019
  
  ---
  
  30Likes6Retweets
  
  
  
  ](https://twitter.com/stonecoldpat0/status/1149971603536666625)
  
  [
  
  ![Twitter avatar for @nassyweazy](https://substackcdn.com/image/twitter_name/w_96/nassyweazy.jpg)
  
  Nass - nassyweazy.eth @nassyweazy
  
  The reality of gas optimizations on Solidity come at a great cost: safety. Solidity is not very safe by design and it becomes a lot harder once you make more code unchecked or inline assembly. It's now your job to implement the compiler checks in unit & integration tests.
  
  ](https://twitter.com/nassyweazy/status/1569399374924374026)[
  
  6:55 PM ∙ Sep 12, 2022
  
  ---
  
  37Likes5Retweets
  
  
  
  ](https://twitter.com/nassyweazy/status/1569399374924374026)
  
  ### Safe practices exist for a reason
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7be32fba-7f7a-46b4-a8b1-0638b52e6607_1400x500.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7be32fba-7f7a-46b4-a8b1-0638b52e6607_1400x500.png)
  
  In some cases, we see developers explicitly choosing unsafe practices for the sake of gas efficiency.
  
  ERC-20 approvals are a good example. The original ERC-20 spec called for users to approve an app for a specific amount of tokens, so that the app can only spend the expected amount. But in practice, most frontends request [infinite approvals](https://twitter.com/larry0x/status/1466415608308850696), in part to avoid repeated gas expenditures for users. If the app’s deployer is compromised, attackers can drain funds directly from the wallets of users who gave these permissions.
  
  As another example, Solidity provides SafeMath, which checks for overflow and underflow. A popular ‘tip’ is to disable these safety checks in order to save some gas:
  
  [
  
  ![Twitter avatar for @KhanAbbas201](https://substackcdn.com/image/twitter_name/w_96/KhanAbbas201.jpg)
  
  Abbas Khan | abbas_khan.lens @KhanAbbas201
  
  Solidity Tip: 👨‍💻 Disable the overflow and underflow of numbers using the unchecked keyword which also results in saving gas while doing math in solidity. Here's how: 👇
  
  ![Image](https://substackcdn.com/image/fetch/w_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fpbs.substack.com%2Fmedia%2FFpd9cmHaIAAXKsN.jpg)
  
  
  
  ](https://twitter.com/KhanAbbas201/status/1627907758409527297)[
  
  5:47 AM ∙ Feb 21, 2023
  
  ---
  
  56Likes4Retweets
  
  
  
  ](https://twitter.com/KhanAbbas201/status/1627907758409527297)
  
  [
  
  ![Twitter avatar for @bantg](https://substackcdn.com/image/twitter_name/w_96/bantg.jpg)
  
  banteg @bantg
  
  Solidity lang: implements safe math by default Solidity devs: gotta shave off these 5 gas by adding unchecked and assembly blocks everywhere
  
  ](https://twitter.com/bantg/status/1488660866547556354)[
  
  11:49 PM ∙ Feb 1, 2022
  
  ---
  
  425Likes28Retweets
  
  
  
  ](https://twitter.com/bantg/status/1488660866547556354)
  
  Safe practices exist for a reason, but in the current state of Ethereum there’s an incentive to circumvent these practices.
  
  ### What Needs to Change
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34848af6-e55f-4f9a-9b30-b3db6b343b11_1400x500.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34848af6-e55f-4f9a-9b30-b3db6b343b11_1400x500.png)
  
  Due to the high cost of computation, app developers currently make a tradeoff between security and cost. The path of least resistance for apps that are both safe and cheap to use is the drastic reduction of computation costs. Removing the need for developers to cut corners when writing code is a simple yet overlooked aspect of app security that is not overlooked at Monad.
  
  [
  
  ![Twitter avatar for @fubuloubu](https://substackcdn.com/image/twitter_name/w_96/fubuloubu.jpg)
  
  señor doggo 🏴🏴‍☠️ in his wartime ceo era @fubuloubu
  
  What is it about solidity that makes people fight over who can create the most incomprehensible code? And why is that cool?
  
  ](https://twitter.com/fubuloubu/status/1623301907866320897)[
  
  12:45 PM ∙ Feb 8, 2023
  
  ---
  
  107Likes4Retweets
  
  
  
  ](https://twitter.com/fubuloubu/status/1623301907866320897)
  
  [
  
  ![Twitter avatar for @LefterisJP](https://substackcdn.com/image/twitter_name/w_96/LefterisJP.jpg)
  
  Lefteris Karapetsas | Hiring for @rotkiapp @LefterisJP
  
  @gakonst Those two are often contradicting each other. Striving for gas efficiency, complicates solidity code and has historically lead to bugs.
  
  ](https://twitter.com/LefterisJP/status/998693893918117889)[
  
  10:35 PM ∙ May 21, 2018
  
  ](https://twitter.com/LefterisJP/status/998693893918117889)
  
  [
  
  ![Twitter avatar for @maurelian_](https://substackcdn.com/image/twitter_name/w_96/maurelian_.jpg)
  
  maurelian.eth 🔴✨ 🦇🔊 @maurelian_
  
  @0xHyperbart With all of these caveats we agree. But look, “weird gas tricks” has pretty much become its own niche Twitter community. I just wanted a pithy tweet to make my case for readability, which otherwise is hard to get people excited about.
  
  ](https://twitter.com/maurelian_/status/1492307405815824385)[
  
  1:19 AM ∙ Feb 12, 2022
  
  ](https://twitter.com/maurelian_/status/1492307405815824385)
  
  Monad is creating a no-compromise environment for developers. The path to onboarding the next billion users will require apps that are both safe and usable; there is no better place to build these than on Monad.
  `,
};
