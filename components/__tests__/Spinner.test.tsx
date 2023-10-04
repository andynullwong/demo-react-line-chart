import React from "react";
import { render } from "@testing-library/react";
import Spinner from "@/components/Spinner";

test("Spinner snapshot", () => {
  const { container } = render(<Spinner />);
  expect(container).toMatchSnapshot();
});
