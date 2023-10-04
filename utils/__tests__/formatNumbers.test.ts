import {
  getDayMonthFromDateString,
  getYearFromDateString,
  numberToMillions,
} from "../formatNumbers";

describe("numberToMillions", () => {
  it("should format a number in millions", () => {
    expect(numberToMillions(1000000)).toBe("1.0m");
    expect(numberToMillions(2500000)).toBe("2.5m");
    expect(numberToMillions(9999999)).toBe("10.0m");
  });

  it("should format a number in thousands", () => {
    expect(numberToMillions(1000)).toBe("1.0k");
    expect(numberToMillions(2500)).toBe("2.5k");
    expect(numberToMillions(9999)).toBe("10.0k");
  });

  it("should format a number with no suffix", () => {
    expect(numberToMillions(500)).toBe("500.00");
    expect(numberToMillions(999)).toBe("999.00");
  });
});

describe("getYearFromDateString", () => {
  it("should return the year from a valid date string", () => {
    expect(getYearFromDateString("2023-10-03")).toBe("2023");
    expect(getYearFromDateString("2022-05-15")).toBe("2022");
    expect(getYearFromDateString("2021-12-31")).toBe("2021");
  });

  it("should return an empty string for an invalid date string", () => {
    expect(getYearFromDateString("invalid-date")).toBe("");
  });
});

describe("getDayMonthFromDateString", () => {
  it("should return the formatted day and month from a valid date string", () => {
    expect(getDayMonthFromDateString("2023-10-03")).toBe("3. Oct");
    expect(getDayMonthFromDateString("2022-05-15")).toBe("15. May");
    expect(getDayMonthFromDateString("2021-12-31")).toBe("31. Dec");
  });

  it("should return an empty string for an invalid date string", () => {
    expect(getDayMonthFromDateString("invalid-date")).toBe("");
  });
});
