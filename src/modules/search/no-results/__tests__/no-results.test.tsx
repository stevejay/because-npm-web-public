import NoResults from "../no-results";
import React from "react";
import { render } from "react-testing-library";

test("renders as a button", async () => {
  const { getByText } = render(<NoResults />);
  const message = getByText(/No matching packages/i);
  expect(message).toBeInTheDocument();
  expect(message.textContent).toMatch(
    /No matching packages ?found in the graph/i
  );
});
