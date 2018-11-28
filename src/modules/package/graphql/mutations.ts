import gql from "graphql-tag";

// TODO fix any

export const UpdateRecentHistoryPackages = gql`
  mutation UpdateRecentHistoryPackages($nodeName: any!) {
    updateRecentHistoryPackages(nodeName: $nodeName) @client
  }
`;
