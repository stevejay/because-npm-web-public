import React from "react";
import { render } from "react-testing-library";
import ErrorMessage from "../error-message";

test("displays 404 error correctly", async () => {
  const { getByText, container } = render(<ErrorMessage error={404} />);
  expect(container.getElementsByTagName("section").length).toEqual(1);
  const heading = getByText(/Not Found/i);
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H2");
});

test("displays 500 error correctly", async () => {
  const { getByText, container } = render(<ErrorMessage error={500} />);
  expect(container.getElementsByTagName("section").length).toEqual(1);
  const heading = getByText(/Server Error/i);
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H2");
});
