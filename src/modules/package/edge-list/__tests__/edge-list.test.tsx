import React from "react";
import { render, waitForElement } from "react-testing-library";
import { EdgeList } from "../edge-list";
import { EDGE_DEFAULT_TAKE, EDGE_COMMENT_DEFAULT_TAKE } from "../../constants";
import { MockedProvider } from "react-apollo/test-utils";
import { EdgeSearch, EdgeCommentSearch } from "../../graphql/queries";
import {
  IEdgeSearchVariables,
  IEdgeSearchResult,
  IEdgeCommentSearchVariables,
  IEdgeCommentSearchResult
} from "../../types";
import deepFreeze from "@ef-carbon/deep-freeze";
import { MemoryRouter } from "react-router";
import userEvent from "user-event";

const NODE_ID = "edge-1";

const EDGE_1 = deepFreeze({
  id: "edge-1 edge-2",
  tailNodeId: "edge-1",
  headNodeId: "edge-2"
});

const EDGE_2 = deepFreeze({
  id: "edge-1 edge-3",
  tailNodeId: "edge-1",
  headNodeId: "edge-3"
});

type ResponseMock =
  | {
      request: { query: any; variables: IEdgeSearchVariables };
      result?: { data: IEdgeSearchResult };
      error?: any;
    }
  | {
      request: { query: any; variables: IEdgeCommentSearchVariables };
      result?: { data: IEdgeCommentSearchResult };
      error?: any;
    };

function renderEdgeCommentList(mocks: Array<ResponseMock>) {
  return render(
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <EdgeList
          match={{ params: [NODE_ID], isExact: true, path: "/", url: "/" }}
        />
      </MockedProvider>
    </MemoryRouter>
  );
}

test("shows initial edges and no more exist", async () => {
  const mocks: Array<ResponseMock> = [
    {
      request: {
        query: EdgeSearch,
        variables: {
          after: null,
          tailNodeId: NODE_ID,
          first: EDGE_DEFAULT_TAKE
        }
      },
      result: {
        data: {
          edgeSearch: {
            edges: [
              { node: EDGE_1, cursor: "cursor-1" },
              { node: EDGE_2, cursor: "cursor-2" }
            ],
            pageInfo: { hasNextPage: false }
          }
        }
      }
    },
    {
      request: {
        query: EdgeCommentSearch,
        variables: {
          after: null,
          edgeId: "edge-1 edge-2",
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

  const { getByText, container } = renderEdgeCommentList(mocks);
  await waitForElement(() => getByText(/No comments found/i));
  const headings = container.getElementsByTagName("h2");
  expect(headings.length).toEqual(3);
  expect(headings[0].textContent).toMatch(/to edge-2 because…/i);
  expect(headings[1].textContent).toMatch(/No comments found/i);
  expect(headings[2].textContent).toMatch(/to edge-3 because…/i);
});

test("shows initial edges and more exist", async () => {
  const mocks: Array<ResponseMock> = [
    {
      request: {
        query: EdgeSearch,
        variables: {
          after: null,
          tailNodeId: NODE_ID,
          first: EDGE_DEFAULT_TAKE
        }
      },
      result: {
        data: {
          edgeSearch: {
            edges: [{ node: EDGE_1, cursor: "cursor-1" }],
            pageInfo: { hasNextPage: true }
          }
        }
      }
    },
    {
      request: {
        query: EdgeSearch,
        variables: {
          after: "cursor-1",
          tailNodeId: NODE_ID,
          first: EDGE_DEFAULT_TAKE
        }
      },
      result: {
        data: {
          edgeSearch: {
            edges: [{ node: EDGE_2, cursor: "cursor-2" }],
            pageInfo: { hasNextPage: false }
          }
        }
      }
    },
    {
      request: {
        query: EdgeCommentSearch,
        variables: {
          after: null,
          edgeId: "edge-1 edge-2",
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

  const { getByText, container } = renderEdgeCommentList(mocks);
  await waitForElement(() => getByText(/No comments found/i));
  let headings = container.getElementsByTagName("h2");
  expect(headings.length).toEqual(2);
  expect(headings[0].textContent).toMatch(/to edge-2 because…/i);
  expect(headings[1].textContent).toMatch(/No comments found/i);

  const moreButton = getByText("See more packages");
  expect(moreButton).toBeInTheDocument();

  userEvent.click(moreButton);
  await waitForElement(() => getByText(/edge-3/i));

  headings = container.getElementsByTagName("h2");
  expect(headings.length).toEqual(3);
  expect(headings[2].textContent).toMatch(/to edge-3 because…/i);
});
