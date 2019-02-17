import Logo from "../logo";
import React from "react";
import { render } from "react-testing-library";
import { MemoryRouter } from "react-router";

function renderHeader() {
  return render(
    <MemoryRouter>
      <Logo />
    </MemoryRouter>
  );
}

test("renders the logo as a heading", async () => {
  const { getByTestId } = renderHeader();
  const heading = getByTestId("site-name");
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H2");
});

test("displays the site title as a link to the home page", async () => {
  const { getByTestId } = renderHeader();
  const heading = getByTestId("site-name");
  const link = heading.children[0];
  expect(link.tagName).toEqual("A");
  expect(link.getAttribute("href")).toEqual("/");
  expect(link.textContent).toEqual("Because NPM");
});
