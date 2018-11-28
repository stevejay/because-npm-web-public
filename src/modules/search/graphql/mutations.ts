import gql from "graphql-tag";

export const UpdateSearchParams = gql`
  mutation UpdateSearchParams($searchTerm: String!) {
    updateSearchParams(searchTerm: $searchTerm) @client
  }
`;
