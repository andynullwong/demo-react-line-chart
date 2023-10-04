import React from "react";
import { render } from "@testing-library/react";
import TableButtons from "@/components/TableButtons";

test("TableButtons snapshot", () => {
  const { container } = render(<TableButtons />);
  expect(container).toMatchSnapshot();
});
