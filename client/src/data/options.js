export const categories = [
  'All',
  'Protocol',
  'Service',
  'Grant',
  'Media',
  'Social',
  'Investment',
  'Platform',
  'Collector',
]

export const dateFounded = [
  { value: 'all', label: 'All Dates' },
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
]

export const blockchain = [
  { value: 'all', label: 'All' },
  { value: 'ethereum', label: 'Ethereum' },
  { value: 'polygon', label: 'Polygon' },
  { value: 'binance smart chain', label: 'Binance Smart Chain' },
  { value: 'harmony', label: 'Harmony' },
  { value: 'solana', label: 'Solana' },
  { value: 'algorand', label: 'Algorand' },
  { value: 'stellar', label: 'Stellar' },
  { value: 'nEAR', label: 'NEAR' },
  { value: 'ibm blockchain', label: 'IBM Blockchain' },
  { value: 'hyperledger fabric', label: 'Hyperledger Fabric' },
  { value: 'tezos', label: 'Tezos' },
  { value: 'eOSIO', label: 'EOSIO' },
  { value: 'waves', label: 'Waves' },
  { value: 'ripple', label: 'Ripple' },
]

export const total_value_locked = [
  {
    value: { low: -1, high: -1 },
    label: 'All ',
  },
  {
    value: { low: 0, high: 1 },
    label: 'Under $1b',
  },
  {
    value: { low: 1, high: 5 },
    label: '$1b to $5b',
  },
  {
    value: { low: 5, high: 10 },
    label: '$5b to $10b',
  },
  {
    value: { low: 10, high: 9999 },
    label: 'Over $10b',
  },
]
