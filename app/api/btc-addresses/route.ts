import { CsvBtcAddressBalance } from "@/types/btcAddressBalance.type";
import fs from "fs";
import { NextResponse } from "next/server";
import Papa from "papaparse";
import path from "path";

export const GET = async () => {
  const filePath = path.join(
    process.cwd(),
    "public/data/Coin_Metrics_Network_Data_2023-02-02T14-32.csv"
  );
  const fileData = fs.readFileSync(filePath, "utf16le");
  const csvData = Papa.parse<CsvBtcAddressBalance>(fileData, { header: true });
  const { meta, data, errors } = csvData;

  if (errors.length) {
    throw NextResponse.json({
      errors,
      statusCode: 500,
    });
  }
  return NextResponse.json({ meta, btcBalance: data });
};
