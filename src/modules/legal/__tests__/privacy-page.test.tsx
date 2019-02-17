import PrivacyPage from "../privacy-page";
import React from "react";
import { render } from "react-testing-library";
import { MemoryRouter } from "react-router";

test("displays the page title", async () => {
  const { getByText } = render(
    <MemoryRouter>
      <PrivacyPage />
    </MemoryRouter>
  );
  const heading = getByText("Privacy Policy");
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H1");
});
