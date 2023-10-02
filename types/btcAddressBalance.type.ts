export interface CsvBtcAddressBalance {
  Time: string;
  "BTC / Addr Cnt of Bal ≥ $1K": string;
  "BTC / Val in Addrs w/ Bal ≥ $10K USD": string;
  "BTC / Val in Addrs w/ Bal ≥ $100K USD": string;
  "BTC / Val in Addrs w/ Bal ≥ $1M USD": string;
  "BTC / Val in Addrs w/ Bal ≥ $10M USD": string;
}

interface BtcAddressBalance {
  time: string;
  btc1K: string;
  btc10K: string;
  btc100K: string;
  btc1M: string;
  btc10M: string;
}

export default BtcAddressBalance;
