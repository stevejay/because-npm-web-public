import * as _ from "lodash";
import * as React from "react";
import { Query } from "react-apollo";
import { BulletList } from "react-content-loader";
import Delay from "react-delay";
import { RouteComponentProps, withRouter } from "react-router";
import { Error, NoGraphResults } from "src/shared/content-state";
import { IEdge } from "src/types/domain-types";
import { IFetchMoreFunc, ISearchNode } from "src/types/graphql-types";
import { EdgeSearch } from "../graphql/queries";
import { IEdgeSearchResult, IEdgeSearchVariables } from "../types";
import EdgeList from "./edge-list";

type AllProps = RouteComponentProps<{}> & {};

class EdgeSearchQuery extends Query<IEdgeSearchResult, IEdgeSearchVariables> {}

class EdgeListHandler extends React.Component<AllProps> {
  public render() {
    const { match } = this.props;
    return (
      <EdgeSearchQuery
        query={EdgeSearch}
        variables={{
          after: null,
          first: 15,
          tailNodeId: match.params[0]
        }}
      >
        {({ loading, error, data, fetchMore }) => {
          if (error) {
            return <Error />;
          } else if (loading || !data) {
            return (
              <Delay wait={1000}>
                <BulletList />
              </Delay>
            );
          } else if (!data.edgeSearch || _.isEmpty(data.edgeSearch.edges)) {
            return <NoGraphResults text="No alternative packages" />;
          } else {
            return (
              <EdgeList
                edges={data.edgeSearch.edges}
                hasNextPage={data.edgeSearch.pageInfo.hasNextPage}
                // tslint:disable-next-line
                onMore={() => this.handleMore(data, fetchMore)}
              />
            );
          }
        }}
      </EdgeSearchQuery>
    );
  }

  private handleMore = (
    data: IEdgeSearchResult,
    fetchMore: IFetchMoreFunc<IEdgeSearchResult>
  ) => {
    const lastEdge: ISearchNode<IEdge> | undefined = _.last(
      data.edgeSearch.edges
    );
    fetchMore({
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }

        return {
          ...prev,
          edgeSearch: {
            ...prev.edgeSearch,
            edges: [
              ...prev.edgeSearch.edges,
              ...fetchMoreResult.edgeSearch.edges
            ],
            pageInfo: fetchMoreResult.edgeSearch.pageInfo
          }
        };
      },
      variables: {
        after: lastEdge ? lastEdge.cursor : ""
      }
    });
  };
}

export default withRouter<RouteComponentProps<{}>>(EdgeListHandler);
