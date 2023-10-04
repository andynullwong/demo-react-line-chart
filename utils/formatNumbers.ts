import { parseISO } from "date-fns";

export const numberToMillions = (num: number) =>
  num >= 1000000 ? `${(num / 1000000).toFixed(1)}m` : num.toString();

export const getYearFromDateString = (dateString: string) =>
  parseISO(dateString).getFullYear().toString();
