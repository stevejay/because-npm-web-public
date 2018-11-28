import gql from "graphql-tag";
import { PAGE_SIZE } from "../constants";

export const AutocompleteNodeSearch = gql`
  query AutocompleteNodeSearch($term: String!, $first: Int = ${PAGE_SIZE}) {
    autocompleteNodeSearch(term: $term, first: $first) {
      nodes {
        id
        description
        link
      }
    }
  }
`;

export const NodeSearch = gql`
  query NodeSearch($term: String!, $first: Int = ${PAGE_SIZE}, $after: String) {
    nodeSearch(term: $term, first: $first, after: $after) {
      edges {
        node {
          id
          description
          link
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
`;

export const SearchParams = gql`
  query SearchParams {
    searchParams @client {
      searchTerm
    }
  }
`;
