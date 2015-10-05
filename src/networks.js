// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  hullcoin: {
    messagePrefix: '\x18Hullcoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x28,
    scriptHash: 0x64,
    wif: 0xA8,
    dustThreshold: 0
  }
}
