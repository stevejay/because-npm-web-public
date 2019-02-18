import React from "react";
import { render } from "react-testing-library";
import SearchResult from "../search-result";
import { MemoryRouter } from "react-router";

function renderSearchResult(edgeCount: number) {
  return render(
    <MemoryRouter>
      <SearchResult
        result={{
          id: "search-result-1",
          description: "The description",
          link: "https://test.com",
          edgeCount
        }}
      />
    </MemoryRouter>
  );
}

test("displays the result heading", async () => {
  const { getByText } = renderSearchResult(10);
  const heading = getByText(/search-result-1/i);
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H2");
});

test("displays the result link", async () => {
  const { container } = renderSearchResult(10);
  const links = container.getElementsByTagName("a");
  expect(links.length).toEqual(1);
  expect(links[0].getAttribute("href")).toEqual("/package/search-result-1");
});

test("displays the description", async () => {
  const { getByText } = renderSearchResult(10);
  expect(getByText(/The description/i)).toBeInTheDocument();
});

test("displays no link count description for no links", async () => {
  const { queryByText } = renderSearchResult(0);
  expect(queryByText(/linked to/i)).toBeFalsy();
});

test("displays correct link count description for one link", async () => {
  const { getByText } = renderSearchResult(1);
  expect(getByText(/linked to around 1 package/i)).toBeInTheDocument();
});

test("displays correct link count description for two links", async () => {
  const { getByText } = renderSearchResult(2);
  expect(getByText(/linked to around 2 packages/i)).toBeInTheDocument();
});

test("displays correct link count description for many links", async () => {
  const { getByText } = renderSearchResult(9999);
  expect(getByText(/linked to many packages/i)).toBeInTheDocument();
});
