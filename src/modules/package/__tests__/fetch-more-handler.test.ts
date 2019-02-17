import deepFreeze from "@ef-carbon/deep-freeze";
import fetchMoreHandler from "../fetch-more-handler";

test("has correct variables when has no last edge", () => {
  const result = fetchMoreHandler(
    {
      edgeSearch: {
        edges: []
      }
    },
    "edgeSearch"
  );
  expect(result.variables).toEqual({ after: "" });
});

test("has correct variables when has a last edge", () => {
  const result = fetchMoreHandler(
    {
      edgeSearch: {
        edges: [{ cursor: "some-cursor-value" }]
      }
    },
    "edgeSearch"
  );
  expect(result.variables).toEqual({ after: "some-cursor-value" });
});

test("reducer updates existing results with new results", () => {
  const handler = fetchMoreHandler(
    {
      edgeSearch: {
        edges: [{ cursor: "some-cursor-value" }]
      }
    },
    "edgeSearch"
  );

  const result = handler.updateQuery(
    deepFreeze({
      extra: {},
      edgeSearch: {
        edges: [{ id: 1 }],
        pageInfo: "old-page-info"
      }
    }),
    {
      fetchMoreResult: {
        edgeSearch: {
          edges: [{ id: 2 }],
          pageInfo: "new-page-info"
        }
      }
    }
  );

  expect(result).toEqual({
    extra: {},
    edgeSearch: {
      edges: [{ id: 1 }, { id: 2 }],
      pageInfo: "new-page-info"
    }
  });
});

test("reducer ignores new results when they are empty", () => {
  const handler = fetchMoreHandler(
    {
      edgeSearch: {
        edges: [{ cursor: "some-cursor-value" }]
      }
    },
    "edgeSearch"
  );

  const result = handler.updateQuery(
    deepFreeze({
      extra: {},
      edgeSearch: {
        edges: [{ id: 1 }],
        pageInfo: "old-page-info"
      }
    }),
    {
      fetchMoreResult: null
    }
  );

  expect(result).toEqual({
    extra: {},
    edgeSearch: {
      edges: [{ id: 1 }],
      pageInfo: "old-page-info"
    }
  });
});
