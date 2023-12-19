import { Document } from "langchain/document";

export const april11: Document<Record<string, any>>[] = [
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095078733712457799",
    },
    pageContent: `
  Q: Developing production-quality dApps on Ethereum and other SC platforms is extremely challenging. Even experienced developers struggle to prevent hacks, exploits, and failures in Solidity-based dApps; even simple functionality requires complex code that is difficult to analyze for production readiness. As a result, there is a scarcity of professional SC developers, and the competition for their services is intense. Can you talk about Monad's plans for dApp development and how Monad will support developers in building scalable and secure dApps?

  A (Keone): this may be a controversial opinion but i think our society actually has a lot of programmers - every year a new batch of CS students graduates, plus the proportion of students studying CS seems to increase every year.  what's needed is an environment where programmers can be productive in developing new applications in a small team, leveraging existing services and open APIs.  i think that's a big part of what decentralized computation offers - the ability to plug into an existing network of applications, APIs, and user assets, and create something experimental and new.

  with that said, we definitely need better resources (and even just better curation of existing resources) to help developers coming over from web2 to learn the fundamentals needed to be a productive SC dev

  a lot of the dapps right now are DeFi apps because that's the most fundamental plumbing, but over time i'd expect there to be a greater focus on things that aren't necessarily explicitly monetary.  The DeFi plumbing will become more enshrined (while also benefiting from being battle tested in a highly adversarial environment) and the innovation will focus more on games and user experiences.  i think that makes the scaryness of SC development easier to reason about - the core utilities will be changing less frequently, while at the edges of possibility there will be a lot of new things.
  think about all of the flash apps that were created in the early 2000s that ended up not being specifically important, but which contributed to the development of tech that powered bigger websites that did achieve PMF and turn into big useful efforts 
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095079459079589890",
    },
    pageContent: `
  Q: How important is community to Monads success and what plans do you have on growing/nurturing it?


  A (Bill monday): treat them mean keep them keen?
  Na - very important. prioritisation of info flows, activation and delegation of responsibilities, feedback etc. we want monad to be synonymous with our ambassadors and community.

  A (Keone): community is super important. crypto (and especially programmable crypto) is still very new - it always shocks me to remember that Uniswap was only developed in 2017 - so there is a lot of unknown about what should be the focus from both the app and infrastructure perspective.  community keeps projects honest -- adherent to the principles of decentralization and self-sovereignty -- as well as focused on things that are actually important

  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095080843854221403",
    },
    pageContent: `
  Q: Testnet is at 76% loading, according to the tweet

  1) will is this testnet run be private or open but limited (application process)?
  
  2) what are the team's goals for this edition of the testnet? it's probably a mix of all of these, but maybe just an order of priority: stability? speed? test the consensus mechanism with more diverse nodescape?
  
  3) will monad be compatible with standard Metamask on a new network or will it require a Metamask snap (which are coming in August it looks like!) ?
  
  4) will monad have any restrictions on types of MEV allowed or will it be left entirely up to governance?
  
  5) How was the name Monad chosen? It brings to mind "monolithic gonads", and I am not trying to be funny.
  

  A (eunice): we'll have phased testnet, so each phase will have a specific set of goals and objectives. to start, will be private and focus will be largely on stability and robustness prior to opening up to public / incentivized testnet

  should not require metamask snap for wallet functionality 
  
  I'll let @monochrome handle the other qs
  
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095081717116698684",
    },
    pageContent: `
  Q: What is the team's decentralization goal for the testnet? will a maximum be established (example: 1000 validators) ? 

  A (eunice): aim is for decentralization across multiple axes, e.g. size, location, set-up type, etc. however, to start, there will be a maximum in active set of about 130 participants but we plan to improve this as we continue to research and implement consensus improvements beyond MVP
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095082102799736983",
    },
    pageContent: `
  Q: Do you have any suggestions, what kind of NFT projects would you like to see on the testnet/mainnet? Or is everything in the hands of the community?


  A (Bill monday): We’d like to see the whole range of projects! Ideally there would be familiar 10k pfps etc and then an evolution into dynamic/music/gaming nfts, or large scale collections of 100k+ 

  really encouraging experimentation here and pushing boundaries so relying on the artists somewhat. 
  
  monad will have some more hands on projects, but mostly will rely on the community and NFT devs. The monad nomads is a community project and they’re getting good traction just by being the first and present, so def just start if you have an idea.  
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095082191534440530",
    },
    pageContent: `
  Q: What about IBC implement for cross-chain?

  A (Keone): it's under consideration but not finalized!
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095083232246104096",
    },
    pageContent: `
  Q: has monad developed a native bridge or discussed with dapps to build one? Yeah they’re sus af but big restrictor for new chains is bridging at launch, is that being looked into 

  A (eunice): definitely.  we recognize that we're in a multichain world and having bridging capabilities day 1 is necessary, so are having those discussions
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095083307202519242",
    },
    pageContent: `
  Q: Cross-chain interoperability is a complex issue that requires solutions that can seamlessly integrate different blockchains. How does Monad plan to handle cross-chain interoperability and integration with other blockchains; in particular, what strategies does Monad plan to use to ensure interoperability, and how will these strategies be able to overcome potential challenges such as differences in consensus mechanisms, token standards, and network architecture?

  A (Keone): we think the most important thing is interoperability with Ethereum and maybe 1-2 other EVM environments (maybe L2s).  if someone wants to bridge from (say) aptos they can go aptos <> eth <> monad.  so we're mostly focused on that.

  the general pattern is that the bridge operators run light clients of both chains, and relay messages from one to the other by having the validator set (effectively a multisig) make attestations that an event on one chain happened on the other.  we think this fits well into our design but are still deciding on the exact bridge provider or rolling our own bridge  
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095084030837411910",
    },
    pageContent: `
  Q: thank you for this clarification, will monad be exclusively made up of a single type of node? (validator)

  A (eunice): may have other node types (e.g. light clients), but will not be as complicated or fragmented as with sharding solution
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095084083438178355",
    },
    pageContent: `
  Q: will monad be compatible with standard Metamask on a new network or will it require a Metamask snap (which are coming in August it looks like!) ?

  A (Keone): Monad will be compatible with standard metamask
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095084923683094698",
    },
    pageContent: `
  Q: will monad have any restrictions on types of MEV allowed or will it be left entirely up to governance?

  A (Keone): we are unopinionated on MEV. we think that MEV arises from user losses (e.g. slippage resulting in a backrunning opportunity) and we should be trying to minimize user losses through efficient markets (tighter spreads, less slipapge, more precise oracles etc).  we think that there will naturally be a lot less MEV in an environment where assets are priced more precisely

  but yeah, in a leader-based algorithm, the leader has the ability to choose transaction ordering (which is why having a rotating leader is so important). we think it would be very naive to enforce a mechanism strictly through threat of social slashing 
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095085116696572057",
    },
    pageContent: `
  Q: Currently, people are looking for incentives and searching for airdrops. Do you have any plans to address this? I think this is a question that many people would like to hear.

  A (Keone): understood.  nothing to share at the moment
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095085273177669703",
    },
    pageContent: `
  Q: Where do You see Monad in next 2 years, What will You achive with the highest possibility in your opinion?

  A (eunice): such a difficult q to answer! obvi have big dreams, big goals. I personally hope to see quite a paradigm shift in how blockchain is used. today, lots of constrained defi, some basic gaming. but with the higher tps and performance Monad offers, hopeful to see new use cases that we don't have yet.  How Monad grows in terms of features and future performance innovations will be driven by the needs of the ecosystem and community

  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095085604951302145",
    },
    pageContent: `
  Q: is it too late to change the name Monad?

  A (Bill monday): it’s a little too late yep
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095086658187173969",
    },
    pageContent: `
  Q: How does Monad plan to address the potential issue of increased transaction costs as activity expands to fill up available TPS? Given that even successful scaling solutions will eventually face block space competition and the need for sharding/L2s, how will Monad ensure sustainable and affordable transaction fees in the long term? Additionally, how does Monad plan to prevent bot and spam transactions that can contribute to increased gas fees, and what measures will be put in place?

  A (Keone): multiple monads (like subnets/supernets) (we just think it is important for each network to be much more computationally dense than existing systems are -- like if you have to make 100 copies of a 100 tps network to get to 10,000 tps that's not very good)
  regarding spam prevension, we are exploring different solutions ranging from something like PBS, to something like gas rebates for community-chosen public goods

  10,000 tps will fill up but i think having 10,000 paid transactions per second is a good problem to have
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095087611724451890",
    },
    pageContent: `
  Q: It is necessary to make the network more secure and resistant to attacks, which is important for a DeFi that processes high-value transactions. What are the specific steps and mechanisms involved in Monad's distributed key generation process, and how does this process enhance the security of the network compared to traditional key generation methods?

  A (Keone): nothing new here. validators create their own private keys (same namespace as Ethereum).  i think you might be referring to snark/stark key generation ceremonies where they need to ensure that the randomness is actually truly random?
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095088654457769985",
    },
    pageContent: `
  Q: yep social slashing can only do so much, but sandwiching can happen even in efficient markets and there ways the chain can make it harder if not impossible for them to happen

  Mainly I am trying to bring up discussion on the fact that there is good MEV and bad MEV, and the latter can/should be made more and more unlikely. All of this w/o any hint of censorship 😉   

  A (Keone): for sure, however i think sandwiching is kind of an artifact of people sending what are effectively orders that are reaching very far through the book (like very high bids or very low asks).  that's what creates the incentive for someone to frontrun.  to address this we need deeper liquidity and better tools for execution

  also more of a technical thing but on an AMM you can sandwich atomically because the price immediately adjusts after the trade and the frontrunner can trade against the same liquidity to exit.  an order book doesnt do that
  `,
  },
  {
    metadata: {
      source:
        "https://discord.com/channels/1036357772826120242/1073692445281370152/1095089148987195402",
    },
    pageContent: `
  Q: what methods will be applied to bring developers to monad? What about for the community?

  A (Keone): developers: educational sessions; hackathons; hacker houses; incentives for early developers deploying novel apps on testnet/mainnet; and more generally our team will be looking out for developers trying to build ambitious decentralized apps and working to support them in their build
  community: 
  fundamentally we're building something very new. the execution infra allows for a new design space of apps that are much more interactive. you should expect to see new apps on monad that couldn't be built elsewhere, and get a first crack at trying them out and shaping their direction (or maybe building them yourselves - i know we have a lot of great developers, artists, and community builders in here).  i think that's ultimately the biggest incentive - getting to be early to new tech, learning from that experience and using that to develop one's own knowledge and maybe career

  but along the way, we do have a lot of resources that we'll put into community initiatives, which might be a secondary incentive.  also stuff like helping to incentivize DeFi on monad to incentivize productive capital 
  `,
  },
];
