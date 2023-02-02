import ChartRange from "@/types/chartRange.type";
import { parseISO } from "date-fns";

const { MOCK_TODAY_DATE } = process.env;

export const walletChartCache = new Map<ChartRange, number>();

export const TODAY = MOCK_TODAY_DATE ? parseISO(MOCK_TODAY_DATE) : new Date();

export const getDateRangeMax = (filter: ChartRange): Date => {
  const maxDate = new Date(TODAY);

  if (filter === ChartRange.M_1) {
    maxDate.setDate(TODAY.getDate() - 30);
    return maxDate;
  }
  if (filter === ChartRange.M_3) {
    maxDate.setDate(TODAY.getDate() - 3 * 30);
    return maxDate;
  }
  if (filter === ChartRange.M_12) {
    maxDate.setDate(TODAY.getDate() - 12 * 30);
    return maxDate;
  }
  if (filter === ChartRange.YTD) {
    return new Date(TODAY.getFullYear(), 0, 1);
  }
  return maxDate;
};

// Binary Search Max Date index for Chart Filter
export const findIndexOfMax = (dates: Date[], maxDate: Date) => {
  let left = 0;
  let right = dates.length - 1;
  let resultIndex = dates.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (dates[mid] <= maxDate) {
      resultIndex = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return resultIndex;
};
