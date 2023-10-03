import { DataContextProvider } from "@/context/data.context";
import { FilterContextProvider } from "@/context/filter.context";
import { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "BTC Address Balances over Time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DataContextProvider>
          <FilterContextProvider>{children}</FilterContextProvider>
        </DataContextProvider>
      </body>
    </html>
  );
}
