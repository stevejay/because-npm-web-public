import * as _ from "lodash";
import * as React from "react";
import { ChildDataProps, graphql, Query } from "react-apollo";
import { ErrorMessage, Loading } from "../../../shared/content-state";
import { NodeSearch, SearchParams } from "../graphql/queries";
import { INodeSearchResult, INodeSearchVariables } from "../types";
import SearchPage from "./search-page";

class NodeSearchQuery extends Query<INodeSearchResult, INodeSearchVariables> {}

type ChildProps = ChildDataProps<
  {},
  { searchParams: { searchTerm: string } },
  {}
>;

class SearchPageHandler extends React.Component<ChildProps> {
  public render() {
    const {
      data: { searchParams }
    } = this.props;

    const searchTerm = searchParams ? searchParams.searchTerm : "";
    if (!searchTerm) {
      return <SearchPage results={null} />;
    }

    return (
      <NodeSearchQuery
        query={NodeSearch}
        variables={{ after: null, first: 25, term: searchTerm }}
      >
        {({ loading, error, data, fetchMore }) => {
          if (error) {
            return <ErrorMessage error={error} />;
          } else if (loading || !data) {
            return <Loading delayMs={1000} />;
          } else {
            return (
              <SearchPage
                results={data.nodeSearch ? data.nodeSearch.edges : null}
                // hasNextPage={data.edgeCommentSearch.pageInfo.hasNextPage}
                // tslint:disable-next-line
                // onMore={() => this.handleMore(data, fetchMore)}
              />
            );
          }
        }}
      </NodeSearchQuery>
    );
  }
}

export default graphql<{}, { searchTerm: string }, {}, ChildProps>(
  SearchParams
)(SearchPageHandler);
