import * as _ from "lodash";
import * as React from "react";
import { Query } from "react-apollo";
import { BulletList } from "react-content-loader";
import Delay from "react-delay";
import Error from "src/shared/content-state/error";
import NoResults from "src/shared/content-state/no-results";
import EdgeCommentList from "./edge-comment-list";
import { EdgeCommentSearch } from "./graphql/queries";

interface IProps {
  edgeId: string;
}

class EdgeCommentListHandler extends React.Component<IProps> {
  public render() {
    const { edgeId } = this.props;
    return (
      <Query
        query={EdgeCommentSearch}
        variables={{
          after: null,
          edgeId,
          first: 15
        }}
      >
        {({ loading, error, data, fetchMore }: any) => {
          // fix this any
          if (error) {
            return <Error />;
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
            return <NoResults text="No matching comments" />;
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
      </Query>
    );
  }

  private handleMore = (
    data: any, // fix any
    fetchMore: any // fix any
  ) => {
    const lastEdge: any = _.last(data.edgeCommentSearch.edges); // fix any
    fetchMore({
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        // fix anys
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
