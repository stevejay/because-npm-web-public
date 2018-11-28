import gql from "graphql-tag";

export const NodeByName = gql`
  query Node($id: String!) {
    node(id: $id) {
      node {
        id
        link
        description
      }
    }
  }
`;

export const RecentHistory = gql`
  query RecentHistory {
    recentHistory @client {
      packages
    }
  }
`;

export const EdgeSearch = gql`
  query EdgeSearch($tailNodeId: String!, $first: Int, $after: String) {
    edgeSearch(tailNodeId: $tailNodeId, first: $first, after: $after) {
      edges {
        node {
          id
          tailNodeId
          headNodeId
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export const EdgeCommentSearch = gql`
  query EdgeCommentSearch($edgeId: String!, $first: Int, $after: String) {
    edgeCommentSearch(edgeId: $edgeId, first: $first, after: $after) {
      edges {
        node {
          id
          edgeId
          comment
          sourceLink
          sourceUserId
          timestampMs
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
