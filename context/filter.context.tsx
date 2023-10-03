"use client";

import ChartRange from "@/types/chartRange.type";
import { ReactNode, createContext, useContext, useState } from "react";

type FilterContextType = {
  filter: ChartRange;
  setFilter: React.Dispatch<React.SetStateAction<ChartRange>>;
};

const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export const FilterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [filter, setFilter] = useState(ChartRange.ALL);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
