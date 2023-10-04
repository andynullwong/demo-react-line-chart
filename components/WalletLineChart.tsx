import { useDataContext } from "@/context/data.context";
import { useFilterContext } from "@/context/filter.context";
import ChartRange from "@/types/chartRange.type";
import {
  getDayMonthFromDateString,
  getYearFromDateString,
  numberToMillions,
} from "@/utils/formatNumbers";
import {
  findIndexOfMax,
  getDateRangeMax,
  walletChartCache,
} from "@/utils/walletUtil";
import Spinner from "@/components/Spinner";
import { parseISO } from "date-fns";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WalletLineChart = () => {
  const { data } = useDataContext();
  const { filter } = useFilterContext();

  if (!data?.data?.length) return <Spinner />;

  if (!walletChartCache.has(filter)) {
    const idx = findIndexOfMax(
      data.data.map((d) => parseISO(d.Time)),
      getDateRangeMax(filter)
    );
    walletChartCache.set(filter, idx);
  }

  const filteredData =
    filter === ChartRange.ALL
      ? data.data
      : data.data.slice(walletChartCache.get(filter)! + 1);

  const tickFormatter =
    filter === ChartRange.ALL
      ? getYearFromDateString
      : getDayMonthFromDateString;

  return (
    <ResponsiveContainer width="100%" height={480}>
      <LineChart
        width={800}
        height={300}
        data={filteredData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Time"
          interval={Math.floor(filteredData.length / (2 * 6))}
          tickFormatter={tickFormatter}
        />
        <YAxis tickFormatter={numberToMillions} />
        <Tooltip
          formatter={(value) => numberToMillions(value.valueOf() as number)}
        />
        <Legend verticalAlign="top" />
        <Line
          dataKey=">1K"
          legendType="plainline"
          dot={false}
          stroke="#3F00FF"
          strokeWidth={2}
        />
        <Line
          dataKey=">10K"
          legendType="plainline"
          dot={false}
          stroke="#FFC300"
          strokeWidth={2}
        />
        <Line
          dataKey=">100K"
          legendType="plainline"
          dot={false}
          stroke="#FF0000"
          strokeWidth={2}
        />
        <Line
          dataKey=">1M"
          legendType="plainline"
          dot={false}
          stroke="#dda0dd"
          strokeWidth={2}
        />
        <Line
          dataKey=">10M"
          legendType="plainline"
          dot={false}
          stroke="#ff00ff"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WalletLineChart;
