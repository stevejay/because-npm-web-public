import * as _ from "lodash";
import * as React from "react";
import { Query } from "react-apollo";
import { BulletList } from "react-content-loader";
import Delay from "react-delay";
import { RouteComponentProps, withRouter } from "react-router";
import { Error, NoGraphResults } from "src/shared/content-state";
import EdgeList from "./edge-list";
import { EdgeSearch } from "./graphql/queries";

type Props = RouteComponentProps<{}> & {};

class EdgeListHandler extends React.Component<Props> {
  public render() {
    const { match } = this.props;
    return (
      <Query
        query={EdgeSearch}
        variables={{
          after: null,
          first: 15,
          tailNodeId: match.params[0]
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
      </Query>
    );
  }

  private handleMore = (
    data: any, // fix any
    fetchMore: any // fix any
  ) => {
    const lastEdge: any = _.last(data.edgeSearch.edges); // fix any
    fetchMore({
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        // fix anys
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
