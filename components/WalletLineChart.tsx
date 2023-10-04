import { useDataContext } from "@/context/data.context";
import { getYearFromDateString, numberToMillions } from "@/utils/formatNumbers";
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
  return data?.data?.length ? (
    <ResponsiveContainer width="100%" height={480}>
      <LineChart
        width={800}
        height={300}
        data={data.data}
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
          interval={Math.floor(data.data.length / (2 * 6))}
          tickFormatter={getYearFromDateString}
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
  ) : (
    <div>Loading...</div>
  );
};

export default WalletLineChart;
