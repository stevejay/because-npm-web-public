import gql from "graphql-tag";
import { NodeFragments } from "../../../shared/graphql/fragments";
import { PAGE_SIZE } from "../constants";

export const AutocompleteNodeSearch = gql`
  query AutocompleteNodeSearch($term: String!, $first: Int = ${PAGE_SIZE}) {
    autocompleteNodeSearch(term: $term, first: $first) {
      nodes {
        ...NodeCoreFields
      }
    }
  }
  ${NodeFragments.coreFields}
`;

export const NodeSearch = gql`
  query NodeSearch($term: String!, $first: Int = ${PAGE_SIZE}, $after: String) {
    nodeSearch(term: $term, first: $first, after: $after) {
      edges {
        node {
          ...NodeCoreFields
          edgeCount
          score
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
  ${NodeFragments.coreFields}
`;

export const SearchParams = gql`
  query SearchParams {
    searchParams @client {
      searchTerm
    }
  }
`;
