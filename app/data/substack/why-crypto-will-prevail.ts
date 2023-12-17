import { Document } from "langchain/document";

export const whyCryptoWillPrevail: Document<Record<string, any>> = {
  metadata: { source: "https://monadlabs.substack.com/p/why-crypto-will-prevail-rapid-innovation-from-permissionless-composability-279df71661d2" },
  pageContent: `Why crypto will prevail: rapid innovation from permissionless composability

  KEONE
  2022. 9. 26.
  Looking around right now, there’s a fair bit of pessimism about crypto.
  
  Price reflexivity and a tendency to over-index on the present make us overly reactive in both directions: overly euphoric in the good times, overly pessimistic now. “Gas price is 5 gwei,” the lament goes these days. “No one will ever want to do anything on-chain.”
  
  This is short-sighted. Rather, we should start from first principles and reason out what is powerful about on-chain apps, and then predict what will come to fruition and act accordingly.
  
  I am optimistic about the prospects for crypto, and I am extremely confident that decentralized computation will be an impactful force in bettering everyday people’s lives.
  
  Why? Because decentralized computation enables a platform where developers can stack innovation, building up increasingly sophisticated apps from simple primitives and open APIs. Speed of innovation is what will ultimately allow developers to build better apps that add value for everyday users. In the past few years we’ve seen a hint of what is possible through composability; the next few years will allow us as a developer community to deliver on that promise.
  
  What’s powerful about decentralized compute?
  A smart contract blockchain enables shared global state. It enables a sandbox with a single global namespace in which many apps and assets coexist. Developers can build new apps that compose with existing apps or assets, simply using their functions as subroutines and taking advantage of atomic execution afforded by the virtual machine. Users can seamlessly use these new apps with their assets and data because they also live in this same sandbox. Decentralized networks allow developers to build up increasingly complex apps by building on top of simpler ones. This reuse of functionality through open APIs allows for faster innovation.
  
  Trustless shared global state is only possible because of decentralization. Decentralization means that authority over all state variables of every app is governed by a diverse group of arbiters, such that collusion to censor transactions, or even to execute state transitions contrary to code, would be incredibly difficult. Decentralization is the reason why the system has hundreds of nodes participating in consensus, instead of just one; and it’s the reason why users can trust that when they deposit funds into a virtual bank, that the code governing that deposit() function will be followed, and thus that they’ll later be able to withdraw() their funds.
  
  Decentralization is what allows many apps to coexist and compose with one another in a trustless shared global state. Coexistence enables rapid innovation. Rapid innovation is what will make crypto prevail.
  
  What’s missing?
  Shared global state is incredibly powerful since it enables seamless composability of apps and assets. However, existing systems are not efficient at accessing and managing this state. Executing each transaction requires loading contract bytecode and state from disk, as well as CPU time to step through instructions. Of these two requirements, state access is by far the more constrained one. Existing systems are highly limited by their nodes’ ability to serve state efficiently.
  
  Low blockchain throughput affects apps’ ability to scale to support many users. High gas fees are an impediment to the virality needed for mass user adoption. And low blockchain throughput limits developers’ ability to design more sophisticated interactions that make good use of composability. It’s not enough to create many subnetworks with separate state, because that breaks composability and requires bridging of information and assets from one subnetwork to another. We need denser networks that support more frequent and efficient access to state.
  
  If we can make significant improvements to state access, we will lift limitations on developers and enable more innovative apps. And if we can make those improvements while continuing to support the EVM bytecode standard, which is ubiquitous in crypto, then we can rapidly unblock the existing developer community and build upon the substantial universe of existing apps and libraries. EVM is already the most composable, has much more mature tooling, and has a robust community of developers and applied cryptography researchers.
  
  I am especially optimistic about the future of decentralized apps because we have made significant improvements to state access for EVM smart contracts at Monad. Monad supports parallel and asynchronous execution of EVM smart contracts, building a proper scheduler for interacting with the disk and executing transactions, thus massively raising throughput. Improvements that Monad and other projects are making to deliver more efficient state access will unblock developers and unlock innovation.
  
  A plea for utility
  With markedly more efficient state access, developers can focus on real innovation — real apps that everyday users would want to use without artificial incentives.
  
  A common refrain from the past few years has been the power of tokens in incentivizing early users to bootstrap a marketplace. The thought goes something like this: “if Facebook or Twitter had rewarded their early users with shares in the company, they could have supercharged growth even more, so let’s do that with our DEX”.
  
  Unfortunately it is quite difficult to design rewards mechanisms that are sybil-resistant. Meanwhile, mechanisms that reward liquidity provision or volume mostly end up getting exactly what they pay for: mechanisms rewarding liquidity provision will get liquidity, but it’ll mostly be dominated by a few large yield farmers, while mechanisms rewarding volume will get volume, but it’ll be dominated by a few large traders.
  
  In other words, as an app developer, having a token can only take you so far. Your app must be useful enough that people actually want to use it; the free governance tokens can only be a bonus.
  
  I believe that it is possible to build decentralized apps that achieve staying power through innovations that provide additional utility, functionality and fun for everyday users.
  
  It is not difficult to imagine.
  
  I can imagine a ticketing system for concerts and sporting events that simply makes the tickets NFTs. Users would benefit from easy and secure transfer upon resale; gone will be the days of arriving to a Taylor Swift concert to find out that your seller photoshopped the barcode. And as an added benefit, you’ll be able to keep the ticket stubs in a mementos section of your wallet, rather than having the physical ticket clutter up your house. An entire subsector of apps could evolve which interact with tickets or other mementos, now that they all live in one namespace.
  
  I can imagine a decentralized sports betting marketplace, powered by a decentralized sports oracle that pays users to attest to the outcome of sporting matches. A staking/challenge mechanism would keep oracle data providers honest, while the marketplace could allow many market-makers to compete to offer the tightest spreads, contrary to most centralized sports books which capture massive spreads (8% according to the American Gaming Association).
  
  I can imagine a virtual tamagotchi game where pets are NFTs that users can raise, pamper, and bond with. It is not hard to imagine this game vastly exceeding the capabilities of the simple game I played in the 90s, when there was no connectivity to the internet, no way to have your pet interact with others’, and no way for the creators to upgrade the game or add new features or content. I can imagine truly dedicated fans even building functionality of their own to add new ways to interact with their pets, similar to how players in Minecraft continue to add to the gameplay through modding.
  
  Conviction matters
  Strong conviction about any new technology requires a foundational understanding of what new value that technology adds, and what its limitations are. A good mental model allows us to see beyond present, flawed implementations and develop expectations about what the world will look like in a few years. With a strong understanding of the fundamentals, we can predict the future; and take action to help realize that future.
  
  The excesses of the previous cycle rewarded developers for quickly shipping products to capitalize on short-term euphoria. Additionally, limitations to blockchain throughput heavily limited the sophistication of new apps. What we got was a lot of products with low innovation; after all, a fork ships much faster than a new idea. Now that the investing world has snapped back to reality, and as improvements to base-layer blockchains unlock higher throughput, it should be clear to developers what to focus on: innovative products that add real utility for end users.
  
  The hypothetical products described here (and countless others that you can imagine from a few minutes of brainstorming) are not impossible to build. They require solid execution by strong, focused teams, but they are very possible, perhaps even probable.
  
  I look forward to a future that is full of powerful apps that add tremendous value to everyday users’ lives, enabled by the unique properties of trustless shared global state.
  
  At Monad, we are deeply committed to enabling this future by building hyperefficient trustless shared global state. If you share the same vision, please reach out to us on Twitter or explore opportunities to work together.
  
  
  `,
};
