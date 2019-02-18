import React from "react";
import { render } from "react-testing-library";
import EdgeComment from "../edge-comment";

function renderEdgeComment() {
  return render(
    <EdgeComment
      entity={{
        id: "1",
        edgeId: "1 2",
        comment: "The comment text",
        timestampMs: "1234567890",
        sourceLink: "https://test.com",
        sourceUserId: "Steve"
      }}
    />
  );
}

test("displays the comment text", async () => {
  const { getByText } = renderEdgeComment();
  expect(getByText(/The comment text/i)).toBeInTheDocument();
});

test("displays the timestamp", async () => {
  const { getByText } = renderEdgeComment();
  expect(getByText(/1970-1-15/i)).toBeInTheDocument();
});

test("displays the tweet link", async () => {
  const { getByText } = renderEdgeComment();
  const link = getByText(/View Tweet/i);
  expect(link.tagName).toEqual("A");
  expect(link.getAttribute("href")).toEqual("https://test.com");
});
