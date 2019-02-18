import React from "react";
import { render, waitForElement } from "react-testing-library";
import EdgeCommentList from "../edge-comment-list";
import { EDGE_COMMENT_DEFAULT_TAKE } from "../../constants";
import { MockedProvider } from "react-apollo/test-utils";
import { EdgeCommentSearch } from "../../graphql/queries";
import {
  IEdgeCommentSearchVariables,
  IEdgeCommentSearchResult
} from "../../types";
import deepFreeze from "@ef-carbon/deep-freeze";
import userEvent from "user-event";

const EDGE_ID = "edge-1";

const EDGE_COMMENT_1 = deepFreeze({
  id: "edge-comment-1",
  edgeId: EDGE_ID,
  comment: "Comment 1",
  timestampMs: "1111111111",
  sourceLink: "https://test.com/1",
  sourceUserId: "User1"
});

const EDGE_COMMENT_2 = deepFreeze({
  id: "edge-comment-2",
  edgeId: EDGE_ID,
  comment: "Comment 2",
  timestampMs: "2222222222",
  sourceLink: "https://test.com/2",
  sourceUserId: "User2"
});

type ResponseMock = {
  request: { query: any; variables: IEdgeCommentSearchVariables };
  result?: { data: IEdgeCommentSearchResult };
  error?: any;
};

function renderEdgeCommentList(mocks: Array<ResponseMock>) {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EdgeCommentList edgeId={EDGE_ID} />
    </MockedProvider>
  );
}

test("shows initial comments and no more exist", async () => {
  const mocks: Array<ResponseMock> = [
    {
      request: {
        query: EdgeCommentSearch,
        variables: {
          after: null,
          edgeId: EDGE_ID,
          first: EDGE_COMMENT_DEFAULT_TAKE
        }
      },
      result: {
        data: {
          edgeCommentSearch: {
            edges: [
              { node: EDGE_COMMENT_1, cursor: "cursor-1" },
              { node: EDGE_COMMENT_2, cursor: "cursor-2" }
            ],
            pageInfo: { hasNextPage: false }
          }
        }
      }
    }
  ];

  const { getByText, queryByText } = renderEdgeCommentList(mocks);
  await waitForElement(() => getByText(/Comment 1/i));
  expect(getByText(/Comment 1/i)).toBeInTheDocument();
  expect(getByText(/Comment 2/i)).toBeInTheDocument();
  expect(queryByText("See more comments")).toBeFalsy();
});

test("displays an error message when the server request fails", async () => {
  const mocks: Array<ResponseMock> = [
    {
      request: {
        query: EdgeCommentSearch,
        variables: {
          after: null,
          edgeId: EDGE_ID,
          first: EDGE_COMMENT_DEFAULT_TAKE
        }
      },
      error: new Error("Some error")
    }
  ];

  const { getByText } = renderEdgeCommentList(mocks);
  await waitForElement(() => getByText(/Server Error/i));
  expect(getByText(/Server Error/i)).toBeInTheDocument();
});

test("displays the appropriate message when there are no results", async () => {
  const mocks: Array<ResponseMock> = [
    {
      request: {
        query: EdgeCommentSearch,
        variables: {
          after: null,
          edgeId: EDGE_ID,
          first: EDGE_COMMENT_DEFAULT_TAKE
        }
      },
      result: {
        data: {
          edgeCommentSearch: {
            edges: [],
            pageInfo: { hasNextPage: false }
          }
        }
      }
    }
  ];

  const { getByText } = renderEdgeCommentList(mocks);
  await waitForElement(() => getByText(/No comments found/i));
  expect(getByText(/No comments found/i)).toBeInTheDocument();
});

test("shows initial comments and gets more when requested", async () => {
  const mocks: Array<ResponseMock> = [
    {
      request: {
        query: EdgeCommentSearch,
        variables: {
          after: null,
          edgeId: EDGE_ID,
          first: EDGE_COMMENT_DEFAULT_TAKE
        }
      },
      result: {
        data: {
          edgeCommentSearch: {
            edges: [{ node: EDGE_COMMENT_1, cursor: "cursor-1" }],
            pageInfo: {
              hasNextPage: true
            }
          }
        }
      }
    },
    {
      request: {
        query: EdgeCommentSearch,
        variables: {
          after: "cursor-1",
          edgeId: EDGE_ID,
          first: EDGE_COMMENT_DEFAULT_TAKE
        }
      },
      result: {
        data: {
          edgeCommentSearch: {
            edges: [{ node: EDGE_COMMENT_2, cursor: "cursor-2" }],
            pageInfo: {
              hasNextPage: false
            }
          }
        }
      }
    }
  ];

  const { getByText, queryByText } = renderEdgeCommentList(mocks);
  await waitForElement(() => getByText(/Comment 1/i));

  expect(getByText(/Comment 1/i)).toBeInTheDocument();
  expect(queryByText(/Comment 2/i)).toBeFalsy();
  const moreButton = getByText("See more comments");
  expect(moreButton).toBeInTheDocument();

  userEvent.click(moreButton);
  await waitForElement(() => getByText(/Comment 2/i));

  expect(getByText(/Comment 1/i)).toBeInTheDocument();
  expect(getByText(/Comment 2/i)).toBeInTheDocument();
  expect(queryByText("See more comments")).toBeFalsy();
});
