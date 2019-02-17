import InfiniteScrollList from "../infinite-scroll-list";
import React from "react";
import { render } from "react-testing-library";
import { noop } from "lodash";
import { ApolloError } from "apollo-client";
import userEvent from "user-event";

const SEARCH_DATA_WITH_MORE_RESULTS = {
  edges: [
    { node: { id: 1111 }, cursor: "aaaa" },
    { node: { id: 2222 }, cursor: "bbbb" }
  ],
  pageInfo: {
    hasNextPage: true
  }
};

const SEARCH_DATA_WITH_NO_MORE_RESULTS = {
  edges: [
    { node: { id: 1111 }, cursor: "aaaa" },
    { node: { id: 2222 }, cursor: "bbbb" }
  ],
  pageInfo: {
    hasNextPage: false
  }
};

const TestComponent = ({
  entity,
  isFirst
}: {
  entity: any;
  isFirst: boolean;
}) => <div data-testid={entity.id} className={isFirst ? "first" : undefined} />;

test("displays an error", async () => {
  const { getByText } = render(
    <InfiniteScrollList
      loading={false}
      error={new ApolloError({ errorMessage: "some error" })}
      searchData={null}
      emptyMessage="Empty message"
      moreMessage="See more comments"
      component={TestComponent}
      onMoreClick={noop}
    />
  );
  expect(getByText(/Server Error/i)).toBeTruthy();
});

test("displays nothing while loading and there are no existing results", async () => {
  const { queryByText } = render(
    <InfiniteScrollList
      loading
      searchData={null}
      emptyMessage="Empty message"
      moreMessage="See more comments"
      component={TestComponent}
      onMoreClick={noop}
    />
  );
  expect(queryByText("Empty message")).toBeFalsy();
});

test("displays nothing wnen not loading and there are no existing results", async () => {
  const { getByText } = render(
    <InfiniteScrollList
      loading={false}
      searchData={null}
      emptyMessage="Empty message"
      moreMessage="See more comments"
      component={TestComponent}
      onMoreClick={noop}
    />
  );
  expect(getByText(/Empty message/i)).toBeTruthy();
});

test("displays search results that have more results available", async () => {
  const { queryByText, getByTestId, getByText } = render(
    <InfiniteScrollList
      loading={false}
      searchData={SEARCH_DATA_WITH_MORE_RESULTS}
      emptyMessage="Empty message"
      moreMessage="See more comments"
      component={TestComponent}
      onMoreClick={noop}
    />
  );
  expect(queryByText(/Empty message/i)).toBeFalsy();
  expect(getByTestId("1111")).toBeTruthy();
  expect(getByTestId("2222")).toBeTruthy();
  expect(getByText(/See more comments/i)).toBeTruthy();
});

test("more results button", async () => {
  const handleMoreClick = jest.fn();
  const { getByText } = render(
    <InfiniteScrollList
      loading={false}
      searchData={SEARCH_DATA_WITH_MORE_RESULTS}
      emptyMessage="Empty message"
      moreMessage="See more comments"
      component={TestComponent}
      onMoreClick={handleMoreClick}
    />
  );
  const button = getByText(/See more comments/i);
  userEvent.click(button);
  expect(handleMoreClick).toHaveBeenCalledTimes(1);
});

test("displays search results that have no more results available", async () => {
  const { queryByText, getByTestId } = render(
    <InfiniteScrollList
      loading={false}
      searchData={SEARCH_DATA_WITH_NO_MORE_RESULTS}
      emptyMessage="Empty message"
      moreMessage="See more comments"
      component={TestComponent}
      onMoreClick={noop}
    />
  );
  expect(queryByText("Empty message")).toBeFalsy();
  expect(getByTestId("1111")).toBeTruthy();
  expect(getByTestId("2222")).toBeTruthy();
  expect(queryByText("See more comments")).toBeFalsy();
});
