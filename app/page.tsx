"use client";

import TableButtons from "@/components/TableButtons";
import ChartContainer from "@/components/ChartContainer";

export default function App() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Line Chart Demo
          </h2>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            BTC Address Balances over Time
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-8 text-center">
        <ChartContainer />
        <TableButtons />
      </div>
    </section>
  );
}
