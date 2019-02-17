import React from "react";
import { Query } from "react-apollo";
import { EDGE_COMMENT_DEFAULT_TAKE } from "../constants";
import { EdgeCommentSearch } from "../graphql/queries";
import InfiniteScrollList from "../../../shared/infinite-scroll-list";
import fetchMoreHandler from "../fetch-more-handler";
import {
  IEdgeCommentSearchResult,
  IEdgeCommentSearchVariables
} from "../types";
import EdgeComment from "../edge-comment";

type Props = {
  edgeId: string;
};

class EdgeCommentSearchQuery extends Query<
  IEdgeCommentSearchResult,
  IEdgeCommentSearchVariables
> {}

const EdgeCommentList = ({ edgeId }: Props) => (
  <EdgeCommentSearchQuery
    query={EdgeCommentSearch}
    variables={{
      after: null,
      edgeId,
      first: EDGE_COMMENT_DEFAULT_TAKE
    }}
  >
    {({ loading, error, data, fetchMore }) => (
      <InfiniteScrollList
        loading={loading}
        error={error}
        searchData={data ? data.edgeCommentSearch : null}
        emptyMessage="No alternate packages found"
        moreMessage="See more comments"
        component={EdgeComment}
        onMoreClick={() =>
          fetchMore(fetchMoreHandler(data, "edgeCommentSearch"))
        }
      />
    )}
  </EdgeCommentSearchQuery>
);

export default EdgeCommentList;
