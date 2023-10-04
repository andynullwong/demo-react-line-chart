import React from "react";
import { render } from "@testing-library/react";
import WalletLineChart from "@/components/WalletLineChart";
import { useDataContext } from "@/context/data.context";
import mockJson from "./__mocks__/data.json";

jest.mock("../../context/data.context", () => ({
  useDataContext: jest.fn(),
}));

describe("WalletLineChart", () => {
  it("renders with mocked data", () => {
    (useDataContext as jest.Mock).mockReturnValue({
      data: mockJson
    } as any);

    const { asFragment } = render(<WalletLineChart />);
    expect(asFragment()).toMatchSnapshot();
  });
});
