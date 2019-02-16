import React from "react";
import { BrowserRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import SearchResult from "../search-result";
import "../../../../styles/app.scss";

const EDGE_COUNT_OPTIONS = {
  None: 0,
  One: 1,
  Two: 2,
  Hundreds: 200
};

storiesOf("Search/SearchResult", module)
  .addDecorator(withKnobs)
  .add("Basic", () => {
    const edgeCount = select("Edge count", EDGE_COUNT_OPTIONS, 0);
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
  });
