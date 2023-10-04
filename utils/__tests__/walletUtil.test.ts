import ChartRange from "@/types/chartRange.type";
import { getDateRangeMax, TODAY, findIndexOfMax } from "../walletUtil";

describe("getDateRangeMax", () => {
  it("should return a date 30 days ago for ChartRange.M_1", () => {
    const result = getDateRangeMax(ChartRange.M_1);
    const expected = new Date(TODAY);
    expected.setDate(expected.getDate() - 30);
    expect(result).toEqual(expected);
  });

  it("should return a date 90 days ago for ChartRange.M_3", () => {
    const result = getDateRangeMax(ChartRange.M_3);
    const expected = new Date(TODAY);
    expected.setDate(expected.getDate() - 3 * 30);
    expect(result).toEqual(expected);
  });

  it("should return a date 90 days ago for ChartRange.M_12", () => {
    const result = getDateRangeMax(ChartRange.M_12);
    const expected = new Date(TODAY);
    expected.setDate(expected.getDate() - 12 * 30);
    expect(result).toEqual(expected);
  });

  it("should return January 1st of the current year for ChartRange.YTD", () => {
    const result = getDateRangeMax(ChartRange.YTD);
    const expected = new Date(TODAY.getFullYear(), 0, 1);
    expect(result).toEqual(expected);
  });

  it("should return the same date for an unknown ChartRange", () => {
    const result = getDateRangeMax("INVALID_RANGE" as ChartRange);
    expect(result).toEqual(TODAY);
  });

  it("should return the same date for an undefined ChartRange", () => {
    const result = getDateRangeMax(undefined as unknown as ChartRange);
    expect(result).toEqual(TODAY);
  });
});

describe("findIndexOfMax", () => {
  const dates = [
    new Date("2023-01-02"),
    new Date("2023-01-05"),
    new Date("2023-01-10"),
    new Date("2023-01-11"),
    new Date("2023-01-12"),
    new Date("2023-02-12"),
    new Date("2023-03-12"),
    new Date("2023-04-12"),
  ];

  it("should return the correct index", () => {
    const maxDate = new Date("2023-01-06");
    const result = findIndexOfMax(dates, maxDate);
    expect(result).toBe(1);
  });

  it("should return the last index if max date is later than all dates in the array", () => {
    const maxDate = new Date("2024-04-01");
    const result = findIndexOfMax(dates, maxDate);
    expect(result).toBe(7);
  });

  it("should return 0 if the date array is empty", () => {
    const maxDate = new Date("2023-02-15");
    const result = findIndexOfMax([], maxDate);
    expect(result).toBe(0);
  });

  it("should return unfiltered if max date is null", () => {
    const maxDate = null as unknown as Date;
    const result = findIndexOfMax(dates, maxDate);
    expect(result).toBe(8);
  });
});
