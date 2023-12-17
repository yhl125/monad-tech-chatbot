import { Document } from "langchain/document";

export const monadVsRollups: Document<Record<string, any>> = {
  metadata: { source: "https://monadlabs.substack.com/p/monad-vs-rollups" },
  pageContent: `# Monad vs Rollups

  ### A common question that we get is: “why not implement Monad as a rollup?” There are a few major reasons...
  
  [![](https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b238428-63b5-494b-876d-2eee81906676_256x256.jpeg)](https://substack.com/profile/19356127-keone)
  
  [KEONE](https://substack.com/@keoneh)
  
  2023. 3. 30.
  
  Share
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa0194e0e-10fc-4742-9cf6-5f6f35544ef1_2800x1000.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa0194e0e-10fc-4742-9cf6-5f6f35544ef1_2800x1000.png)
  
  Monad is scaling the EVM by building an ultra-high-performance execution system and consensus mechanism. Monad is a new layer-1 blockchain, and a common question that we get is: “why not implement Monad as a rollup?” There are a few major reasons:
  
  The first reason is **decentralization**. Rollups currently lack a mechanism for decentralized block production, which is essential to censorship-resistance and true decentralization.
  
  The second reason is **performance**. We’re building the most performant and least expensive system possible, and building as a rollup would impose limitations to Monad’s scalability.
  
  The last reason is **focus**. We believe that a high-performance EVM execution environment, runnable by anyone, is on the critical path to massively improving the reach and utility of decentralized computation. The Monad team is deeply focused on contributing to the crypto space by executing on this vision. There will be opportunities at a later time to combine some of Monad’s improvements with rollup mechanisms, but our focus is clear right now.
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6708c80a-0ce7-4674-b472-21cecea72f7a_2800x1000.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6708c80a-0ce7-4674-b472-21cecea72f7a_2800x1000.png)
  
  ## Decentralization and censorship-resistance are non-negotiable
  
  **Decentralization** is the first reason why Monad is not a rollup.
  
  Rollup blocks are currently produced by a centralized sequencer. This sequencer has absolute authority to choose the official transaction order and to censor transactions. This is extremely powerful:
  
  - The authority over transaction ordering gives the sequencer the ability to extract value from favorable orderings, either directly (by favoring its own transactions) or indirectly (by accepting payments from arbitrageurs). This is clearly extremely valuable, as evidenced by [estimates](https://explore.flashbots.net/) of value extracted on Ethereum mainnet from choice of order.
      
  - The ability to censor transactions means that the sequencer can deny service to users or applications of its choice. This is not just an abstract consideration; centralized authorities with jurisdiction over the sequencer might use it to enforce arbitrary blacklists. As a partial mitigation, in some rollups, users can submit a transaction directly to L1 to force inclusion; however that transaction will be delayed to avoid interfering with normal sequencer operations.
      
  
  Decentralization of the sequencer is a hot topic, and various rollups have stated intention to work on decentralizing the sequencer ([Optimism](https://dev.optimism.io/decentralization-roadmap/), [Arbitrum](https://developer.arbitrum.io/inside-arbitrum-nitro/#decentralized-fair-sequencing)). The timeline is distant to say the least, with Optimism [mentioning](https://dev.optimism.io/decentralization-roadmap/) that decentralizing the sequencer is one of the high level themes to be worked on _after_ achievement of other initiatives which themselves won’t be complete until 2024. For further reading, Jon Charbonneau has published an excellent [survey](https://joncharbonneau.substack.com/p/rollups-arent-real) of planned rollup mechanics for decentralizing the sequencer.
  
  More generally, most rollups currently have a variety of suboptimalities while their teams work on breakthroughs. L2Beat has an excellent [list](https://l2beat.com/scaling/risk) of outstanding risk factors on existing rollups, ranging from implementing actual fraud proofs to having a backup option in the event of sequencer failure. Vitalik has proposed a helpful [list](https://ethereum-magicians.org/t/proposed-milestones-for-rollups-taking-off-training-wheels/11571) of milestones for rollups to remove their “training wheels”. There’s quite a ways to go.
  
  Monad is not a rollup because we believe that decentralized block production is a first-class priority. Centralization undermines the purpose of crypto and creates points of failure - both from a [technical perspective](https://twitter.com/TrustlessState/status/1640354118748217344) as well as from a point of leverage from other centralized entities.
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F853acd17-c4da-4e2f-bf5a-e7f2d43bbb88_2800x1000.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F853acd17-c4da-4e2f-bf5a-e7f2d43bbb88_2800x1000.png)
  
  ## Monad’s design is the most performant choice
  
  **Performance** is the second reason why Monad is not a rollup.
  
  Monad is designed for performance. At execution time, Monad does pipelined execution—scheduling transactions properly across cores, with related transactions scheduled back-to-back. Additionally, execution is accelerated substantially by a custom storage backend for state and contract code. These improvements make each Monad node extremely efficient at execution relative to both mainnet nodes and rollup nodes.
  
  Although these improvements deliver a performance boost for Monad relative to _existing_ rollups, perhaps obviating the need _**for**_ a rollup, a sharp-eyed reader could technically still ask “why not combine these improvements with a rollup mechanism and deliver Monad as a rollup.” To address that, we need to consider what is typically added and subtracted when “converting” a standalone chain to a rollup.
  
  ### Rollups: Subtract Consensus, Add a DA Dependency
  
  An L1 blockchain executes transactions which affect the state of accounts and smart contracts. An L1 blockchain uses a consensus mechanism to keep hundreds of nodes in sync with each other, enforcing agreement about the official ordering of transactions which are to be applied to each of the nodes. Contrasting this with a rollup, there are a few obvious differences:
  
  1. Rollups don’t have a consensus mechanism; most or all have a single sequencer producing ~all rollup blocks.
      
  2. Rollups maintain their own state in a merkle trie, but commit data back to a data availability (DA) layer (generally, Ethereum). Two kinds of data are committed: compressed transaction data, and periodic merkle roots which summarize the rollup state.
      
  3. Rollups have a proof mechanism to ensure that the merkle root matches the result of applying transactions sequentially. In the case of a ZK-rollup, this proof mechanism is a cryptographic proof of valid state transitions (aka a validity proof). In the case of an optimistic rollup, it’s the lack of a successful fraud proof during a lengthy challenge period where a successful fraud proof is heavily incentivized.
      
  
  Rollups are tied intimately to their DA layer; the order of transactions on the DA layer officially defines the true state on the rollup. This is part of the tradeoff: the rollup sequencer is centralized and could theoretically disappear at any moment (e.g., lightning strike); if that were to happen, the DA layer is needed to adjudicate ownership of all assets that were on the rollup. Thus, the DA layer is the true authority.
  
  A basic mental model for comparing a rollup to a freestanding L1 is that the rollup removes the overhead of consensus and does execution in a more centralized fashion, while relying on the proof mechanism to enforce that merkle roots stored on the decentralized DA layer correctly reflect the consequence of whatever transaction order was committed.
  
  This carries several ‘benefits’:
  
  1. Since there is no need for direct decentralization, the sequencer can run on high-end hardware, such as a computer with massive RAM
      
  2. Consensus typically takes up a significant portion of the block time, placing severe limitations on the execution budget. A network with one node has no such overhead
      
  
  In turn, the rollup accepts several consequences:
  
  1. the rollup inherits the cost of pushing transaction data and merkle roots back to the DA layer;
      
  2. the rollup inherits the capacity limitations of the DA layer;
      
  3. the rollup inherits the time-to-finality of the DA layer.
      
  
  ### Don’t Remove Consensus, Just Accelerate It
  
  Monad takes a different approach. Instead of removing consensus from the blockchain design, we heavily optimize it to allow it to stay out of the way of execution.
  
  Monad features a novel BFT algorithm and a high-performance p2p layer. Furthermore, Monad adopts a modular design in which nodes come to consensus prior to execution; in our design, execution runs in parallel to consensus, slightly deferred, and therefore can utilize the full block time.
  
  These changes allow Monad’s high-performance consensus to offer the best of both worlds: consensus keeps up with execution rather than impeding it, and we don’t inherit costs or limitations from the DA layer.
  
  ### Ethereum DA comes with high costs
  
  If Monad were an Ethereum-based rollup, transactions submitted to Monad would incur the costs of pushing calldata and merkle roots back to Ethereum.
  
  These costs are nontrivial. [L2Fees.info](http://l2fees.info/) gives a comparison:
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5a07cd90-cd5d-48c7-8c7d-bd4753d463b1_1224x1000.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5a07cd90-cd5d-48c7-8c7d-bd4753d463b1_1224x1000.png)
  
  For Arbitrum and Optimism, simple swaps are 20x cheaper than on Ethereum mainnet. Although this is an improvement, Monad strives for a much larger factor: 1000x the throughput and 1000x cheaper fees.
  
  ### Ethereum DA is limited in capacity
  
  Utilizing Ethereum for DA would also mean inheriting its data limits. In the current state, calldata costs 16 gas per byte, so the target block limit of 15M gas means a max of 937 kb of data per block, or 80 kb/s. At an [average](https://twitter.com/keoneHD/status/1640379817143988224) transaction size of 125 bytes per transaction, this corresponds to about 600 tps, far below Monad’s execution throughput. Note also that this 600 tps is the sum across all Eth-based rollups; Monad would be competing with all other rollups for throughput.
  
  There is much excitement around [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844), which is scheduled to be included in Ethereum’s [Cancun upgrade](https://ethereum-magicians.org/t/cancun-network-upgrade-meta-thread/12060) later this year or early 2024, but EIP-4844 only adds 250 kb of blob data per block, for another 160 tps. The full sharding roadmap is needed to substantially improve Ethereum’s capabilities as a DA service.
  
  ### Ethereum DA has high time to finality
  
  Lastly, rollups on Ethereum inherit Ethereum’s finality, which is very slow due to Gasper’s design. On Ethereum, Gasper takes between 64 and 95 slots to finalize blocks. As each slot is 12 seconds, this corresponds to ~15 minute finality. Meanwhile, Monad uses a hotstuff-based BFT algorithm which has single block finality.
  
  Rollups with a centralized sequencer can claim fast “soft” finality because the sequencer knows its own intentions with respect to the blocks that it plans to commit. However, these transactions are not actually finalized until they are committed to L1 and the commitment is finalized.
  
  In summary, one of the major reasons why Monad is not a rollup is because we optimize for performance. Rather than removing consensus to avoid the overhead, we simply accelerate it.
  
  [
  
  ![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff73fdce6-d7a5-45f0-a64d-720c2f1219e4_2800x1000.png)
  
  
  
  ](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff73fdce6-d7a5-45f0-a64d-720c2f1219e4_2800x1000.png)
  
  ## Monad’s focus is on high-performance execution, urgently needed to maintain scalability and decentralization
  
  **Focus** is the final reason why Monad is not a rollup.
  
  We believe that a high-performance EVM execution environment, runnable by anyone, is on the critical path to massively improving the reach and utility of decentralized computation. We believe that this problem is worth single-minded focus.
  
  Zooming out: a blockchain is a **decentralized system** for maintaining **shared global state** with **trustless execution** of transactions. Shared global state is powerful because it enables many apps and assets to coexist in the same environment, allowing for atomic composability and [rapid innovation](https://medium.com/monad-labs/why-crypto-will-prevail-rapid-innovation-from-permissionless-composability-279df71661d2). In a decentralized system, computation is done in parallel by many nodes, who check each other’s work to ensure that state transition rules are followed. This enables trustlessness, which ultimately allows the blockchain to serve as the basis for a universe of connected apps.
  
  Central to this effort is the property that users of the system be able to verify the computation. This inherently requires the blockchain software to either be computationally very efficient, or for transaction throughput to be highly constrained, so that users can keep up with the chain while using commodity hardware.
  
  Monad massively improves the efficiency of computation, enabling an environment that supports many more users and complexity of apps while still allowing users to run computation locally. We do this by pipelining transaction execution—running transactions in parallel, and scheduling work across cores—and by massively improving contract and state storage with a custom backend. These efficiency gains come from algorithmic improvements rather than through reliance on hardware.
  
  [
  
  ![Twitter avatar for @jadler0](https://substackcdn.com/image/twitter_name/w_96/jadler0.jpg)
  
  John Adler | ✨ @jadler0
  
  @PhABCD @MatthiasEgli @_prestwich @optimismPBC @karl_dot_tech We want scalability without sacrificing decentralization or security. That means we must assume rollup nodes have the same hardware and networking capacities as main chain nodes. Requiring higher specs to run a full node for the rollup chain defeats the whole purpose.
  
  ](https://twitter.com/jadler0/status/1257817211953086465)[
  
  11:39 PM ∙ May 5, 2020
  
  ](https://twitter.com/jadler0/status/1257817211953086465)
  
  Any blockchain—rollup or otherwise—needs to focus on improving execution throughput. This is because the only way to maintain the rollup state is by keeping up with each rollup block and executing all transactions to make incremental state updates. At Monad, we are laser-focused on execution throughput to help move the EVM forward.
  `,
};
