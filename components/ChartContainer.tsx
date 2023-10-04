"use client";

import { useDataContext } from "@/context/data.context";
import { useEffect } from "react";
import BtcAddressBalance from "@/types/btcAddressBalance.type";
import WalletLineChart from "./WalletLineChart";

const ChartContainer = () => {
  const { data, setData } = useDataContext();

  useEffect(() => {
    fetch(`/api/btc-wallets`)
      .then((response) => response.json())
      .then((csvData: Papa.ParseResult<BtcAddressBalance>) => {
        setData(csvData);
      });
  }, [data]);

  return <WalletLineChart />;
};

export default ChartContainer;
