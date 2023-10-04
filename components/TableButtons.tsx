import { useFilterContext } from "@/context/filter.context";
import ChartRange from "@/types/chartRange.type";
import classNames from "@/utils/classNames";
import { Dispatch, SetStateAction } from "react";

const TableButtons = () => {
  const { filter: currentFilter, setFilter } = useFilterContext();

  const Button = ({
    filter,
    setFilter,
  }: {
    filter: ChartRange;
    setFilter: Dispatch<SetStateAction<ChartRange>>;
  }) => {
    const buttonClassNames = [
      "relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10",
    ];

    currentFilter === filter
      ? buttonClassNames.push("text-white bg-purple-900 ring-purple-300")
      : buttonClassNames.push("text-gray-900 bg-gray-50 ring-gray-300");

    return (
      <button
        type="button"
        className={classNames(...buttonClassNames)}
        onClick={() => setFilter(filter)}
      >
        {filter}
      </button>
    );
  };

  return (
    <span className="isolate flex justify-end rounded-md shadow-sm">
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
