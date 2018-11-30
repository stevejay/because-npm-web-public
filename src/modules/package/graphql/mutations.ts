import gql from "graphql-tag";

export const UpdateRecentHistoryPackages = gql`
  mutation UpdateRecentHistoryPackages($nodeName: String!) {
    updateRecentHistoryPackages(nodeName: $nodeName) @client
  }
`;
