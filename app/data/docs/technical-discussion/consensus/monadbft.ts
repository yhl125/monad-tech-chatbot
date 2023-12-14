import { Document } from "langchain/document";

export const monadbft: Document<Record<string, any>> = {
  metadata: {
    source: "https://docs.monad.xyz/technical-discussion/consensus/monadbft",
  },
  pageContent: `# MonadBFT

  Pipelined two-phase HotStuff Consensus
  
  MonadBFT is a high-performance consensus mechanism for achieving agreement about the transaction ordering under partially synchronous conditions in the presence of Byzantine actors. It is a derivative of [HotStuff](https://arxiv.org/pdf/1803.05069.pdf) with the improvement proposed in [Jolteon](https://arxiv.org/pdf/2106.10362.pdf)/[DiemBFT](https://developers.diem.com/papers/diem-consensus-state-machine-replication-in-the-diem-blockchain/2021-08-17.pdf)/[Fast-HotStuff](https://arxiv.org/abs/2010.11454) which is the reduction from three rounds to two rounds by utilizing quadratic communication complexity in the event of leader timeout.
  
  MonadBFT is a pipelined two-phase BFT algorithm with optimistic responsiveness, and with linear communication overhead in the common case and quadratic communication in the case of a timeout. As in most BFT algorithms, communication proceeds in phases; at each phase, the leader sends a signed message to the voters, who send signed responses to the following leader. Pipelining allows the quorum certificate (QC) or timeout certificate (TC) for block \`k\` to piggyback on the proposal for block \`k+1.\`
  
  ## 
  
  Quick facts[](https://docs.monad.xyz/technical-discussion/consensus/monadbft#quick-facts)
  
  |   |   |
  |---|---|
  |Sybil resistance mechanism|Proof-of-Stake (PoS)|
  |Block time|1 second|
  |Finality|Single-slot|
  |Delegation allowed|Yes|
  
  ## 
  
  Mempool[](https://docs.monad.xyz/technical-discussion/consensus/monadbft#mempool)
  
  See [Shared Mempool](https://docs.monad.xyz/technical-discussion/consensus/shared-mempool).
  
  ## 
  
  Consensus Protocol[](https://docs.monad.xyz/technical-discussion/consensus/monadbft#consensus-protocol)
  
  MonadBFT is a pipelined consensus mechanism that proceeds in rounds. The below description gives a high-level intuitive understanding of the protocol.
  
  As is customary, let there be \`n = 3f+1\` nodes, where \`f\` is the max number of Byzantine nodes, i.e. \`2f+1\` (i.e. 2/3) of the nodes are non-Byzantine. In the discussion below, let us also treat all nodes as having equal stake weight; in practice all thresholds can be expressed in terms of stake weight rather than in node count.
  
  - In each round, the leader sends out a new block as well as either a QC or a TC (more on this shortly) for the previous round.
      
  
  - Each validator reviews that block for adherence to protocol and, if they agree, send signed YES votes to the leader of the next round. That leader derives a QC (quorum certificate) by aggregating (via threshold signatures) YES votes from \`2f+1\` validators. Note that communication in this case is _linear_: leader sends block to validators, validators send votes directly to next leader.
      
      - Alternatively, if the validator does not receive a valid block within a pre-specified amount of time, it multicasts a signed timeout message to _all_ of its peers. This timeout message also includes the highest QC that the validator has observed. If any validator accumulates \`2f+1\` timeout messages, it assembles these (again via threshold signatures) into a TC (timeout certificate) which it then sends directly to the next leader.
          
      
  
  - Each validator finalizes the block proposed in round \`k\` upon receiving a QC for round \`k+1\` (i.e. in the communication from the leader of round \`k+2\`). Specifically:
      
      - Alice, the leader of round \`k\`, sends a new block to everyone (along with either a QC or TC for round \`k-1\`; let's ignore that as it's not important).
          
      
      - If \`2f+1\` validators vote YES on that block by sending their votes to Bob (leader of round \`k+1\`), then the block in \`k+1\` will include a QC for round \`k\`. However, seeing the QC for round \`k\` _at this point_ is not enough for Valerie the validator to know that the block in round \`k\` has been enshrined, since (for example) Bob could have been malicious and only sent the block to Valerie. All that Valerie can do is vote on block \`k+1\`, sending her votes to Charlie (leader of round \`k+2\`).
          
      
      - If \`2f+1\` validators vote YES on block \`k+1\`, then Charlie publishes a QC for round \`k+1\` as well as a block proposal for round \`k+2\`. As soon as Valerie receives this block, she knows that the block from round \`k\` (Alice's block) is finalized.
          
      
      - Say that Bob had acted maliciously, either by sending an invalid block proposal at round \`k+1\`, or by sending it to fewer than \`2f+1\` validators. Then at least \`f+1\` validators will timeout, then triggering the other non-Byzantine validators to timeout, leading to at least one of the validators to produce a TC for round \`k+1\`. Then Charlie will publish the TC for round \`k+1\` in his proposal (he will have to in order to make a proposal, because no QC will be available for round \`k+1\`).
          
      
      - We refer to this commitment procedure as a 2-chain commit rule, because as soon as a validator sees 2 adjacent certified blocks \`B\` and \`B'\`, they can commit \`B\` and all of its ancestors.
          
      
  
  References:
  
  - Maofan Yin, Dahlia Malkhi, Michael K. Reiter, Guy Golan Gueta, and Ittai Abraham. [HotStuff: BFT Consensus in the Lens of Blockchain](https://arxiv.org/abs/1803.05069), 2018.
      
  
  - Mohammad M. Jalalzai, Jianyu Niu, Chen Feng, Fangyu Gai. [Fast-HotStuff: A Fast and Resilient HotStuff Protocol](https://arxiv.org/abs/2010.11454), 2020.
      
  
  - Rati Gelashvili, Lefteris Kokoris-Kogias, Alberto Sonnino, Alexander Spiegelman, and Zhuolun Xiang. [Jolteon and ditto: Network-adaptive efficient consensus with asynchronous fallback](https://arxiv.org/pdf/2106.10362.pdf). arXiv preprint arXiv:2106.10362, 2021.
      
  
  - The Diem Team. [DiemBFT v4: State machine replication in the diem blockchain](https://developers.diem.com/papers/diem-consensus-state-machine-replication-in-the-diem-blockchain/2021-08-17.pdf). 2021.
      
  
  ## 
  
  BLS Multi-Signatures[](https://docs.monad.xyz/technical-discussion/consensus/monadbft#bls-multi-signatures)
  
  Certificates (QCs and TCs) can be naively implemented as a vector of ECDSA signatures on the secp256k1 curve. These certificates are explicit and easy to construct and verify. However, the size of the certificate is linear with the number of signers. It poses a limit to scaling because the certificate is included in almost every consensus message, except vote message.
  
  Pairing-based BLS signature on the BLS12-381 curve helps with solving the scaling issue. The signatures can be incrementally aggregated into one signature. Verifying the single valid aggregated signature provides proof that the stakes associated with the public keys have all signed on the message.
  
  BLS signature is much slower than ECDSA signature. So for performance reasons, MonadBFT adopts a blended signature scheme where BLS signature is only used on aggregatable message types (votes and timeouts). Message integrity and authenticity is still provided by ECDSA signatures.
  
  `,
};
