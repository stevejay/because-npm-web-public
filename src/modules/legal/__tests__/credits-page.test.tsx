import CreditsPage from "../credits-page";
import React from "react";
import { render } from "react-testing-library";
import { MemoryRouter } from "react-router";

test("displays the page title", async () => {
  const { getByText } = render(
    <MemoryRouter>
      <CreditsPage />
    </MemoryRouter>
  );
  const heading = getByText("Credits");
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H1");
});
