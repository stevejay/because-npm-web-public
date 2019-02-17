import NotFoundPage from "../not-found-page";
import React from "react";
import { render } from "react-testing-library";

test("displays the not found message as a heading", async () => {
  const { getByText } = render(<NotFoundPage />);
  const heading = getByText(/Not Found/i);
  expect(heading.tagName).toEqual("H2");
});
