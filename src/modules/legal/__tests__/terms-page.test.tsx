import TermsPage from "../terms-page";
import React from "react";
import { render } from "react-testing-library";
import { MemoryRouter } from "react-router";

test("displays the page title", async () => {
  const { getByText } = render(
    <MemoryRouter>
      <TermsPage />
    </MemoryRouter>
  );
  const heading = getByText("Terms and Conditions");
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H1");
});
