import React from "react";
import { render } from "react-testing-library";
import ErrorMessage from "../error-message";

test("displays 404 error correctly", async () => {
  const { container } = render(<ErrorMessage error={404} />);
  expect(container).toMatchSnapshot();
});

test("displays 500 error correctly", async () => {
  const { container } = render(<ErrorMessage error={500} />);
  expect(container).toMatchSnapshot();
});
