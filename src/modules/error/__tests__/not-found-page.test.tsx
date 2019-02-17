import NotFoundPage from "../not-found-page";
import React from "react";
import { render } from "react-testing-library";

test("displays the not found message", async () => {
  const { getByText } = render(<NotFoundPage />);
  expect(getByText(/Not Found/i)).toBeInTheDocument();
});
