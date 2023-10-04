"use client";

import BtcAddressBalance from "@/types/btcAddressBalance.type";
import { ReactNode, createContext, useContext, useState } from "react";

type ParsedBtcBalance = Papa.ParseResult<BtcAddressBalance>;

export type DataContextType = {
  data: ParsedBtcBalance;
  setData: React.Dispatch<React.SetStateAction<ParsedBtcBalance>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState({} as ParsedBtcBalance);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
