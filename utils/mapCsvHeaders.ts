const headerMapping = {
  "BTC / Addr Cnt of Bal ≥ $1K": ">1K",
  "BTC / Val in Addrs w/ Bal ≥ $10K USD": ">10K",
  "BTC / Val in Addrs w/ Bal ≥ $100K USD": ">100K",
  "BTC / Val in Addrs w/ Bal ≥ $1M USD": ">1M",
  "BTC / Val in Addrs w/ Bal ≥ $10M USD": ">10M",
};

const customTransformHeader = (header: string) =>
  headerMapping[header] || header;

export default customTransformHeader;
