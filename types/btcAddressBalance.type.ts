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
  ">1K": number;
  ">10K": number;
  ">100K": number;
  ">1M": number;
  ">10M": number;
}

export default BtcAddressBalance;
