import { get } from "lodash";
import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import InfiniteScrollList from "../../../shared/infinite-scroll-list";
import { EDGE_DEFAULT_TAKE } from "../constants";
import { EdgeSearch } from "../graphql/queries";
import { IEdgeSearchResult, IEdgeSearchVariables } from "../types";
import Edge from "../edge";
import fetchMoreHandler from "../fetch-more-handler";

class EdgeSearchQuery extends Query<IEdgeSearchResult, IEdgeSearchVariables> {}

const EdgeListHandler = ({ match }: RouteComponentProps) => (
  <EdgeSearchQuery
    query={EdgeSearch}
    variables={{
      after: null,
      first: EDGE_DEFAULT_TAKE,
      tailNodeId: get(match, "params[0]")
    }}
  >
    {({ loading, error, data, fetchMore }) => (
      <InfiniteScrollList
        loading={loading}
        error={error}
        searchData={data ? data.edgeSearch : null}
        emptyMessage="No alternate packages found"
        component={Edge}
        onMoreClick={() => fetchMore(fetchMoreHandler(data, "edgeSearch"))}
      />
    )}
  </EdgeSearchQuery>
);

export default withRouter<RouteComponentProps>(EdgeListHandler);
