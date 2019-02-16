import { noop } from "lodash";
import React from "react";
import { storiesOf } from "@storybook/react";
import InfiniteScrollList from "../infinite-scroll-list";
import "../../../styles/app.scss";
import { ApolloError } from "apollo-client";

const EntityComponent = () => <div>An Entity</div>;

storiesOf("InfiniteScrollList", module)
  .add("Loading", () => (
    <InfiniteScrollList
      loading={true}
      loadingWait={0}
      error={undefined}
      searchData={null}
      emptyMessage="The empty results message"
      component={EntityComponent}
      onMoreClick={noop}
    />
  ))
  .add("Error", () => (
    <InfiniteScrollList
      loading={false}
      loadingWait={0}
      error={new ApolloError({})}
      searchData={null}
      emptyMessage="The empty results message"
      component={EntityComponent}
      onMoreClick={noop}
    />
  ))
  .add("Empty Results", () => (
    <InfiniteScrollList
      loading={false}
      loadingWait={0}
      error={undefined}
      searchData={null}
      emptyMessage="The empty results message"
      component={EntityComponent}
      onMoreClick={noop}
    />
  ))
  .add("Results With More Available", () => (
    <InfiniteScrollList
      loading={false}
      loadingWait={0}
      error={undefined}
      searchData={{
        edges: [
          {
            node: { id: "111111" },
            cursor: "cursor111111"
          },
          {
            node: { id: "222222" },
            cursor: "cursor222222"
          }
        ],
        pageInfo: { hasNextPage: true }
      }}
      emptyMessage="The empty results message"
      component={EntityComponent}
      onMoreClick={noop}
    />
  ));
