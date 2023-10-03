"use client";

import { CsvBtcAddressBalance } from "@/types/btcAddressBalance.type";
import { ReactNode, createContext, useContext, useState } from "react";

type DataContextType = {
  data: CsvBtcAddressBalance[];
  setData: React.Dispatch<React.SetStateAction<CsvBtcAddressBalance[]>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState([] as CsvBtcAddressBalance[]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
