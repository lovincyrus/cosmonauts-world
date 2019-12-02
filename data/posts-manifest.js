const categories = ['all', 'cosmos sdk', 'tendermint core', 'tendermint bft'];

const mapping = [
  {
    name: 'cyber~Congress',
    description: 'A distributed relevance and answering machine. An inter-planetary search engine & a state of the art consensus computer, built with the help of go-IPFS and cosmos-SDK',
    image: '/static/logos/cybercongress.png',
    network: 'testnet',
    verified: 'false',
    links: {
      proof: 'https://github.com/cybercongress/cyberd',
      github: 'https://github.com/cybercongress',
      twitter: 'https://twitter.com/cyber_devs',
      chat: 'https://t.me/fuckgoogle',
      website: 'https://cybercongress.ai/',
    },
    tags: ['cosmos sdk', 'tendermint bft'],
  },
  {
    name: 'Minter',
    description: 'Minter offers you the ability to issue, transfer, or exchange your own coin in seconds with instant liquidity. All our products are open-source—iOS, Android, Web, and Telegram wallets; an API and an SDK.',
    image: '/static/logos/minter.png',
    network: 'mainnet',
    verified: 'false',
    links: {
      proof: 'https://github.com/MinterTeam/minter-go-node',
      github: 'https://github.com/MinterTeam',
      twitter: 'https://twitter.com/MinterTeam',
      chat: 'https://t.me/MinterNetworkGroup',
      website: 'https://minter.network',
    },
    tags: ['tendermint bft'],
  },
];

module.exports = {
  categories,
  mapping,
};
