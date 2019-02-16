import React from "react";
import { graphql, DataProps, Query } from "react-apollo";
import { ErrorMessage, Loading } from "../../../shared/content-state";
import { NodeSearch, SearchParams } from "../graphql/queries";
import { INodeSearchResult, INodeSearchVariables } from "../types";
import SearchPage from "./search-page";

class NodeSearchQuery extends Query<INodeSearchResult, INodeSearchVariables> {}

type Props = {
  searchParams: { searchTerm: string };
};

const SearchPageHandler = ({ data }: DataProps<Props>) => {
  const searchParams = data.searchParams;

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
};

export default graphql<any, object, object, Props>(SearchParams)(
  SearchPageHandler
);
