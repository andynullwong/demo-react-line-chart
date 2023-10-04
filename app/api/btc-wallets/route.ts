import fs from "fs";
import BtcAddressBalance from "@/types/btcAddressBalance.type";
import Papa from "papaparse";
import path from "path";
import customTransformHeader from "@/utils/mapCsvHeaders";
import "server-only";

export const GET = async () => {
  const filePath = path.join(
    process.cwd(),
    "public/data/Coin_Metrics_Network_Data_2023-02-02T14-32.csv"
  );
  const fileData = fs.readFileSync(filePath, "utf16le");
  const csvData = Papa.parse<BtcAddressBalance>(fileData, {
    header: true,
    dynamicTyping: true,
    transformHeader: customTransformHeader,
  });
  const { errors } = csvData;

  if (errors.length) {
    throw Response.json({
      errors,
      statusCode: 500,
    });
  }

  return Response.json(csvData);
};
