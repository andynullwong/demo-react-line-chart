import { format, parseISO } from "date-fns";

export const numberToMillions = (num: number) =>
  num >= 1000000
    ? `${(num / 1000000).toFixed(1)}m`
    : num >= 1000
    ? `${(num / 1000).toFixed(1)}k`
    : num.toFixed(2);

const getFormattedDateFromString = (dateString: string, formatting: string) => {
  try {
    return format(parseISO(dateString), formatting);
  } catch (error) {
    // console.error(error);
    return "";
  }
};

export const getYearFromDateString = (dateString: string) =>
  getFormattedDateFromString(dateString, "yyyy");

export const getDayMonthFromDateString = (dateString: string) =>
  getFormattedDateFromString(dateString, "d. LLL");
