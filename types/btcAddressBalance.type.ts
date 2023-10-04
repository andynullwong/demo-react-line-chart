export interface CsvBtcAddressBalance {
  Time: string;
  "BTC / Addr Cnt of Bal ≥ $1K": string;
  "BTC / Val in Addrs w/ Bal ≥ $10K USD": string;
  "BTC / Val in Addrs w/ Bal ≥ $100K USD": string;
  "BTC / Val in Addrs w/ Bal ≥ $1M USD": string;
  "BTC / Val in Addrs w/ Bal ≥ $10M USD": string;
}

interface BtcAddressBalance {
  Time: string;
  ">1K": string;
  ">10K": string;
  ">100K": string;
  ">1M": string;
  ">10M": string;
}

export default BtcAddressBalance;
