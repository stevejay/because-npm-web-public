import * as _ from "lodash";
import * as React from "react";
import { ChildDataProps, graphql, Query } from "react-apollo";
import Error from "src/shared/content-state/error";
import Loading from "src/shared/content-state/loading";
import { NodeSearch, SearchParams } from "./graphql/queries";
import SearchPage from "./search-page";

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
      <Query
        query={NodeSearch}
        variables={{ after: null, first: 25, term: searchTerm }}
      >
        {({ loading, error, data, fetchMore }: any) => {
          // fix this any

          if (error) {
            return <Error />;
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
      </Query>
    );
  }
}

export default graphql<{}, { searchTerm: string }, {}, ChildProps>(
  SearchParams
)(SearchPageHandler);
