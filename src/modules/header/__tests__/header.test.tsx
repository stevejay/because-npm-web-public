import Header from "../header";
import React from "react";
import { render } from "react-testing-library";
import { MemoryRouter } from "react-router";

function renderHeader() {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
}

test("displays the header as a banner", async () => {
  const { getByRole } = renderHeader();
  expect(getByRole("banner")).toBeInTheDocument();
});

test("displays the site title as a link to the home page", async () => {
  const { getByTestId } = renderHeader();
  const heading = getByTestId("site-name");
  const link = heading.children[0];
  expect(link.tagName).toEqual("A");
  expect(link.getAttribute("href")).toEqual("/");
  expect(link.textContent).toEqual("Because NPM Homepage");
});
