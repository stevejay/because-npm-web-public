import gql from "graphql-tag";

export const UpdateRecentHistoryPackages = gql`
  mutation UpdateRecentHistoryPackages($nodeId: String!) {
    updateRecentHistoryPackages(nodeId: $nodeId) @client
  }
`;
