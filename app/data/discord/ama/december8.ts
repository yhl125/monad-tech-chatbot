import { Document } from "langchain/document";

export const december8: Document<Record<string, any>> = {
  metadata: {
    source:
      "https://discord.com/channels/1036357772826120242/1183046034641932379/1183053224731746475",
  },
  pageContent: `
  Q: Currently, there are many new layer 1 blockchains appearing.  What is the difference between Monad and other layer 1 blockchains?

  A (Keone): Monad rebuilt EVM from scratch in C++ instead of reusing geth
  Monad built a custom database to support parallel access, which is needed for parallel execution to actually speed things up dramatically.
  In general, Monad is a super optimized environment for EVM apps and users
  
  Q: where you see crypto industry in 5-10 years from now
  
  A (Keone): much more mainstream and integrated, like WeChat in china (people using tons of mini apps within WeChat, able to buy anything directly within the app). needs much better UX for this to happen but the pieces are there
  
  Q: how did the happy hours with wormhole go, maybe something interesting for us from this event?
  
  A (Keone): it was great! hopefully we can share some photos once we make sure to emoji out any anons.
  the big takeaway for me is that the broader research community is very excited about parallel execution and other optimizations happening within Monad and there's the potential for a lot of collabs in the coming year. also some absolutely cracked builders in the space, very excited for 2024
  
  Q: If Monad has launched its blockchain ecosystem, can it still be said to be part of  EVM, Or does it have a new name, the namely "MVM" ?
  
  A (Keone): EVM compatibility is the #1 priority. there may be support for additional precompiles that are in high demand from dev teams, but it will always be "EVM" still
  
  Q: By now everyone knows some of the bigger features that will set monad apart such as 10,000tps, parallel execution, etc. but what is an underrated part of the tech that you think will have a big impact that not many people know about?
  
  A (ZenLlama): The Monad Database is something you may have noticed us talking about more lately because its the backbone that makes the above possible. It's definitely been underrated to date as people like to focus on Execution, but its truly a unique advantage that I think has so far got a bit under the radar. The other features that I think people underrate is more along the lines of what we're setting ourselves up to be able to do after initial launch, things like reflexive fee analysis and precompiling and caching hot contracts natively to reduce hot spot contention. We don't talk about these all to much right now because they are so far just options we're setting ourselves up to explore in the future (they will not be live v1), but its really exciting new stuff and when we get there I think people will be quite excited by some of the implications. True evm/acc stuff. 
  
  Q: Dominance of LIDO has raised concerns about centralization in ETH eco. Since monad's specs are viewed as a bit higher comapred to other EVM L1s do u think we gonna see a lotta LST protocols on monad. Also have you put any thought about how do we prevent something like LIDO issue in monad.?
  
  A (Keone): yes! i think that lack of in-protocol delegation support in Ethereum pushes a lot of people towards Lido because they want to stake but don't want to run nodes. i think that if Eth had in-protocol delegation, Lido would have a lot less stake and we wouldn't be seeing these issues
  Monad has in-protocol delegation
  Eth Research community is thinking about whether to support in-protocol delegation, as well as other things like reducing inflation, lifting the 32 ETH cap, etc. it's an evolving situation
  
  Q:Who do we have to thank for Monad's unique branding?
  
  A (Keone): the community, especially the monartists
  
  Q: What is the most challenging technical issue to address during the development of Monad? 
  
  A (Keone): MonadDb. building a database is not an easy task
  
  Q: will we see madlads here as well as in wormhole and when will it be? :04:
  
  A (Keone): hope so! they're a great project with a strong community and an ambitious vision. always great when strong communities collaborate
  
  Q: Why go for evm and not svm for tps? 
  
  A (ZenLlama): Contrary to popular belief right now, the EVM can actually be just as fast, safe, and actually MORE dev friendly than the SVM. Were on a mission to prove that, but I can tell you as a former Solana Core dev working on the SVM runtime, its very possible, just takes a cracked team, a lot of elbow grease, and colloraboration with the rest of the EVM to make it a reality. Challanges were very excited to take on.
  
  Q: Keone, chicken or egg, which one do you think came first?
  
  A (ZenLlama): Keone imho
  
  Q: how you gonna attract builders into monad? tons of chains and so few builders, seen many good blockchains but no builders in those they just slowly vanish
  
  A (Keone): really good question. i think that a lot of metrics (number of builders, number of people attending hacker houses, etc) are sort of vanity metrics, so they sorta never really existed in the first place
  A (ZenLlama): Traditional routes of engagement like Hackathons, ect… are a first step and will be part of the strategy. However, the true test is breaking into the minds of Web2 developers in general. The sense from a lot of Web2 builders is that Blockchains can’t scale or that developing on them is overly complicated. This comes from much of the discourse in Web3 to date being centered on scaling the base chain rather than enabling new experiences. We talk a lot about new experiences in the abstract as part of Web3 but without showing examples of these things, its often met with skepticism as to what the experience actually looks like when you have to deal with the scaling issues of Web3. Thus, to appeal to Web2 builders we need to showcase the features that will allow them to create new experiences so they can focus on App ideation rather than scaling problems. The idea is to showcase what is possible using Monad to dispel this idea that Blockchains aren’t ready for mass adoption. One way to do this is just to showcase dApps on Monad that feel like Web2, to show Web2 developers that good UX is possible when using a Blockchain. Other ways will involve some sort of developer marketing, where we can showcase how to do things using various blockchain dApp primitives to create new experiences. University outreach is also a huge part of this. The idea is to very much go after and target the developers not already in Web3. Rather than fighting over the few devs already here who are incentivized to move to the hottest new thing, we want to make Monad be the first blockchain a lot of people use. This is arguably why ETH and SOL communities are so strong. Lots of the users on both those chains ETH or SOL was the first blockchain they ever touched. You always remember your first, lol. Basically, we gotta show Web2 devs whats possible and not place the scaling problem front and center. Showing them, scaling is Monad’s job, your job is to create cool Apps
  
  Q: who are the main designers for monad? the purple branding is hard
  
  A (Keone): is hard good or bad in this case?
  
  Q: So I know the mainnet will be 150 validators, but will in the testnet around 300 selection testnet vaildators will be choosen? Likely many people want to join as testnet validators and contribute
  
  A (Keone): good question, we'll have more to share in the next few months. i think we put the validator form out a bit early relative to necessity - don't worry about it, it is still being evaluated
  
  Q: We see that crypto development has mushroomed, many blockchains are emerging all the time, how will you try to maintain the existence of Monad in the future and how will you give confidence to the community to always be loyal to Monad?
  
  A (Keone): right. i mean a blockchain is kind of like a nightclub... you wouldn't go if it were empty, the value is all from going with other people who also want to listen to music and have a good time. 
  
  so for any ecosystem, the work is to create a convergence point where all of the apps, users, and capital come together because that creates economies of scale.
  
  an ecosystem built around meaningfully better tech, and an incredibly strong community of smart ppl who know a lot about crypto values and culture, has a much better chance of being that convergence point
  
  A (ZenLlama): This was from the last AMA but its a good Q I never had the chance to post the anser to.
  
  Solana and Avalanche have both raised the bar for attracting developer talent (ie: hacker houses, accelerator programs, incentives).
  
  1) What will Monad do to bring Monad-first developers over from it's primary EVM competition (which I assume to be Avalanche C-chain) ?
  2) Will Monad be at or sponsoring Eth Denver ?
  
  1) I think about this a lot personally and may have a slightly unconventional take on it. First off as a base, all the things like Hackathons, Hacker Houses, University Outreach, ect… is table stakes and will all happen in time. However, I think this question actually becomes much clearer framed more as: “How do you keep builders on Monad give you’re another EVM?” From that we can call out a few pain-points that solving makes Monad extremely attractive. First, gas will actually be cheap, cheap enough that real composability and complex contract interactions like those required for ERC-4337 compliant smart accounts are actually viable at scale. This means you can build things on Monad you simply cant take to another EVM. Secondly, Monad is not afraid to innovate on the EVM. There are other features that we can add that simply won’t be available anywhere else and this is how you make developers sticky. You need to enable unique value propositions. There’s no real shortcut to doing this, and at first this will primarily exist on Monad as true scale. But don’t kind yourself into thinking Monad will stop there, it’s just the base foundation we need to go further. 
  2) We will deff be there, not sure about sponsorship yet.
  
  Q: Monad can reach speeds of 10000tps, but some blockchain are already faster, for example TON.  Can Monad be faster than 10000 tps.
  
  A (ZenLlama): TLDR; baby we just getting started
  
  Q: Many project use NFT mint for hype the community, will monad do the same for the community hype and more engagement?
  
  A (Keone): NFTs are really fun. our team are not artists but hopefully other community members will launch an NFT collection that we can all rock on twitter
  
  Q: I've heard that Monad's gas costs are very low.
  But, Ethereum's gas fee typically increase as Ethereum's price rises.
  What type of coin does Monad use for gas fee, and how can it manage if the price of that coin also rises?
  
  A (Keone): i think you can look at gas costs in at least 2 ways:
  gas costs are in order to allow blockspace supply to match demand. Monad meaningfully increases the blockspace supply, so much more demand can be handled
  gas costs are to pay for resource costs (cost of running the network). costs should be cost of running the network, divided fairly across all of the users demanding to use the network. making execution much more efficient means that the cost per unit of compute can be a lot cheaper
  
  Q: what kind of egg are you keone? like, chicken or quail or whatever......or faberge?
  
  A (Keone): platypus egg
  
  Q: what's the evm/acc?
  
  A (Keone): a silly play on the e/acc movement (which is effective accelerationism - basically the idea of embracing advances in AI because they will provide a lot more productivity to society and thus improve quality of life)
  
  Q: who are the main designers for monad? the purple branding is hard
  
  A (ZenLlama): Honestly this community, you guys are the best.
  
  Q: I've heard that Monad's gas costs are very low.
  But, Ethereum's gas fee typically increase as Ethereum's price rises.
  What type of coin does Monad use for gas fee, and how can it manage if the price of that coin also rises?
  
  A (andrthesnek): The primary reason why Ethereum's gas price is so high is because there is limited block space. Since there is a limit on how many transactions can be included in every block, many transactions don't get included. To pseudo-guarantee that your transaction gets included, you need to pay a higher gas fee so that proposers choose your transaction over others because it'll earn them more from the gas fee. If everyone does this and it continues for a long time, people will continue to increase the overall gas price to try and get their transaction included leading to Ethereum's high gas price.
  
  To hit 10k TPS, Monad's blockspace will be much larger than Ethereum's, meaning that if you just want to get your transaction included you won't need to increase your gas fee since there will be space for your transaction. As such, users won't drive gas prices up as there is no incentive to do so as long as the chain isn't maxing out at 10k TPS :) 
  
  Q: Monad has a lot of memes. I also want to have NFT. Can I also look forward to the NFT market?
  
  A (Keone): that seems like a safe assumption given the talented platypus artists in the Monad Community
  
  Q: Will monad testnet/mainnet validators only for a large infra provider or mix between them with individual (also newcomers) for decentralized?
  
  A (Keone): IMO, it's good for a network to have a mix of both large validator operators and grassroots validators
  
  Q: How developer-friendly is your ecosystem?
  Are there incentives for builders such as grants, funding, or developer rewards to attract and retain builders.
  
  A (andrthesnek): Being 100% EVM compatible means we are really developer-friendly!
  Developers will have access to all the amazing Ethereum developer tools to build secure and efficient dapps and use robust languages like Solidity
  Our grants program is live, you can check it out at https://www.monad.xyz/developer-grant
  
  Q: what is the difference between layer zero and wormhole in terms of preference for monad?
  
  A (Keone): no preference, both are cracked teams that are pushing the space forward in terms of simplifying UX and making it easier for users to go cross-chain. i definitely worry about non crypto natives trying to use Monad for the first time and getting very confused by the UX. more is needed.
  
  obviously, the Monad Community has recently been collaborating more with wormhole which I think has gone super super well - it helped them a lot with the massive influx of folks joining the wormhole discord, and I know their team has a lot of love for the Monad Community now
  
  Q: Will monad testnet/mainnet validators only for a large infra provider or mix between them with individual (also newcomers) for decentralized?
  
  A (ZenLlama): Early private test nets are some chad hand selected validators because we need their help making things better for onboarding new validators before we open it up to the public, but yes when we go to the public phases it'll be a mix. Early private test net days tho you need really experienced validator operations because they are play a critical part in helping us get feedback from their prior experience so we can make things easier for less experienced validators as we go to public phases.
  
  Q: How many users would it take to clog monad? Eth has 500-700k daily users at 27 tps. Are we talking about 400x more users on monad than on eth before it clogs up? 
  
  A (Keone): i think users probably want to do more than 2 transactions per day on Eth as well but just get priced out.  maybe 20x more users on monad with 20x more transactions per user per day?
  
  Q: is the possibility of introducing mon 3 stars r0le being considered?
  
  A (Keone): very creative idea! will run some simulations in the lab
  `,
};
