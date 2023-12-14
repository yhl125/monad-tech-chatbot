import { Document } from "langchain/document";

export const monadDb: Document<Record<string, any>> = {
  metadata: {
    source: "https://docs.monad.xyz/technical-discussion/execution/monaddb",
  },
  pageContent: `# MonadDb

  MonadDb is a custom database for storing blockchain state.
  
  Most Ethereum clients use key-value databases that are implemented as either B-Tree (an example is [LMDB](https://www.symas.com/lmdb)) or LSM-Tree (examples are [LevelD](https://github.com/google/leveldb)[B](https://github.com/google/leveldb) and [RocksDB](https://rocksdb.org/)) data structures. However Ethereum uses the [Merkle Patricia Trie](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/) (MPT) data structure for storing state. This results in a suboptimal solution where one data structure is embedded into another data structure of a different type. MonadDb implements a [Patricia Trie](https://en.wikipedia.org/wiki/Radix_tree) data structure natively, both on-disk and in-memory.
  
  Monad executes multiple transactions in [parallel](https://docs.monad.xyz/technical-discussion/execution/parallel-execution). When one transaction needs to read state from disk, one should not block waiting for that operation to complete - instead one should initiate the read and then start working on another transaction in the meantime. Therefore the problem needs [asynchronous i/o](https://docs.monad.xyz/technical-discussion/concepts/asynchronous-i-o) (async i/o) for the database. The above mentioned key-value databases lack proper async i/o support (although there are some efforts to improve in this area). MonadDb fully utilizes the latest kernel support for async i/o (on Linux this is [io_uring](https://unixism.net/loti/index.html)). This avoids needing to spawn a large number of kernel threads to handle pending i/o requests in an attempt to perform work asynchronously.
  
  MonadDb makes a number of other optimizations related to i/o, such as bypassing the filesystem which add expensive overhead.`,
};
