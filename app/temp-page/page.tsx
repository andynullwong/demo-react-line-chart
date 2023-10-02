"use client";

import { CsvBtcAddressBalance } from "@/types/btcAddressBalance.type";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

const TempPage = () => {
  const { data, isLoading, error } = useSWR<{
    meta: Papa.ParseMeta;
    btcBalance: CsvBtcAddressBalance[];
  }>(`/api/btc-addresses`, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (!data || error) return <div>Error</div>;

  const { meta, btcBalance } = data;
  const header = meta.fields;

  return (
    <div>
      <div>{header}</div>
      <div>{JSON.stringify(btcBalance)}</div>
    </div>
  );
};

export default TempPage;
