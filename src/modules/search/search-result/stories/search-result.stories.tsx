import React from "react";
import { BrowserRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import SearchResult from "../search-result";

function renderSearchResult(edgeCount: number) {
  return (
    <BrowserRouter>
      <SearchResult
        key={edgeCount}
        result={{
          id: "111111",
          description: "Some description of this package",
          link: "https://test.com/111111",
          edgeCount
        }}
      />
    </BrowserRouter>
  );
}

storiesOf("Search/SearchResult", module)
  .add("No Results", () => renderSearchResult(0))
  .add("One Result", () => renderSearchResult(1))
  .add("Two Results", () => renderSearchResult(2))
  .add("Many Results", () => renderSearchResult(999));
