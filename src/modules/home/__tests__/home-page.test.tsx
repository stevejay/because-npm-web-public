import HomePage from "../home-page";
import React from "react";
import { render } from "react-testing-library";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import userEvent from "user-event";

function renderHeader(
  history = createMemoryHistory({ initialEntries: ["/"] })
) {
  return render(
    <Router history={history}>
      <HomePage />
    </Router>
  );
}

test("displays the page title", async () => {
  const { getByText } = renderHeader();
  const heading = getByText(
    "Discover alternative packages in the npm registry"
  );
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H1");
});

test("displays the call to action button", async () => {
  const { getByText } = renderHeader();
  const button = getByText(/Search for a package/i);
  expect(button).toBeInTheDocument();
});

test("call to action button routes to the search page", async () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText } = renderHeader(history);
  const button = getByText(/Search for a package/i);
  userEvent.click(button);
  expect(history.entries.length).toEqual(2);
  expect(history.entries[1].pathname).toEqual("/search");
});

test("includes the contribution section", async () => {
  const { getByText } = renderHeader();
  const heading = getByText(/Want to contribute to the graph\? Just tweet!/i);
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H2");
});
