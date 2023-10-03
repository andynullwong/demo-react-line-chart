import { useFilterContext } from "@/context/filter.context";
import ChartRange from "@/types/chartRange.type";
import { Dispatch, SetStateAction } from "react";

const Button = ({
  filter,
  setFilter,
}: {
  filter: ChartRange;
  setFilter: Dispatch<SetStateAction<ChartRange>>;
}) => (
  <button
    type="button"
    className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
    onClick={() => setFilter(filter)}
  >
    {filter}
  </button>
);

const TableButtons = () => {
  const { setFilter } = useFilterContext();

  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {Object.keys(ChartRange).map((k) => (
        <Button
          key={k}
          filter={ChartRange[k as keyof typeof ChartRange]}
          setFilter={setFilter}
        />
      ))}
    </span>
  );
};

export default TableButtons;
