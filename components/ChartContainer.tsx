"use client";

import { useDataContext } from "@/context/data.context";
import { useEffect } from "react";
import ChartRange from "@/types/chartRange.type";
import { CsvBtcAddressBalance } from "@/types/btcAddressBalance.type";
import WalletLineChart from "./WalletLineChart";

const walletChartCache = new Map<ChartRange, number>();

const ChartContainer = () => {
  const { data, setData } = useDataContext();

  useEffect(() => {
    fetch(`/api/btc-wallets`)
      .then((response) => response.json())
      .then((csvData: Papa.ParseResult<CsvBtcAddressBalance>) => {
        setData(csvData);
      });
  }, [data]);

  return <WalletLineChart />;
};

export default ChartContainer;
