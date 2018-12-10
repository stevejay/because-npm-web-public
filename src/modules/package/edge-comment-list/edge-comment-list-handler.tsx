import * as _ from "lodash";
import * as React from "react";
import { Query } from "react-apollo";
import { BulletList } from "react-content-loader";
import Delay from "react-delay";
import { ErrorMessage, Message } from "../../../shared/content-state";
import { IEdgeComment } from "../../../types/domain-types";
import { IFetchMoreFunc, ISearchNode } from "../../../types/graphql-types";
import { EDGE_COMMENT_DEFAULT_TAKE } from "../constants";
import { EdgeCommentSearch } from "../graphql/queries";
import {
  IEdgeCommentSearchResult,
  IEdgeCommentSearchVariables
} from "../types";
import EdgeCommentList from "./edge-comment-list";

interface IProps {
  edgeId: string;
}

class EdgeCommentSearchQuery extends Query<
  IEdgeCommentSearchResult,
  IEdgeCommentSearchVariables
> {}

class EdgeCommentListHandler extends React.Component<IProps> {
  public render() {
    const { edgeId } = this.props;
    return (
      <EdgeCommentSearchQuery
        query={EdgeCommentSearch}
        variables={{
          after: null,
          edgeId,
          first: EDGE_COMMENT_DEFAULT_TAKE
        }}
      >
        {({ loading, error, data, fetchMore }) => {
          if (error) {
            return <ErrorMessage error={error} />;
          } else if (loading || !data) {
            return (
              <Delay wait={1000}>
                <BulletList />
              </Delay>
            );
          } else if (
            !data.edgeCommentSearch ||
            _.isEmpty(data.edgeCommentSearch.edges)
          ) {
            return <Message>No comments found for this package</Message>;
          } else {
            return (
              <EdgeCommentList
                edges={data.edgeCommentSearch.edges}
                hasNextPage={data.edgeCommentSearch.pageInfo.hasNextPage}
                // tslint:disable-next-line
                onMore={() => this.handleMore(data, fetchMore)}
              />
            );
          }
        }}
      </EdgeCommentSearchQuery>
    );
  }

  // TODO fix these any

  private handleMore = (
    data: IEdgeCommentSearchResult,
    fetchMore: any //IFetchMoreFunc<IEdgeCommentSearchResult>
  ) => {
    const lastEdge: ISearchNode<IEdgeComment> | undefined = _.last(
      data.edgeCommentSearch.edges
    );
    fetchMore({
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) {
          return prev;
        }

        return {
          ...prev,
          edgeCommentSearch: {
            ...prev.edgeCommentSearch,
            edges: [
              ...prev.edgeCommentSearch.edges,
              ...fetchMoreResult.edgeCommentSearch.edges
            ],
            pageInfo: fetchMoreResult.edgeCommentSearch.pageInfo
          }
        };
      },
      variables: {
        after: lastEdge ? lastEdge.cursor : ""
      }
    });
  };
}

export default EdgeCommentListHandler;
