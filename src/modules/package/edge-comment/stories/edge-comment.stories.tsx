import React from "react";
import { BrowserRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import EdgeComment from "../edge-comment";
import "../../../../styles/app.scss";

storiesOf("EdgeCommentList/EdgeComment", module).add("Basic", () => (
  <BrowserRouter>
    <EdgeComment
      entity={{
        id: "111111",
        comment:
          "Some comment by a user that is a quite detailed description as to why they prefer a particular package",
        timestampMs: "1234567890",
        sourceLink: "https://test.com/some-fake-tweet",
        sourceUserId: "@Steve"
      }}
    />
  </BrowserRouter>
));
