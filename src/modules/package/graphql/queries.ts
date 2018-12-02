import gql from "graphql-tag";

export const NodePage = gql`
  query NodePage($id: String!, $first: Int, $after: String) {
    node(id: $id) {
      node {
        id
        link
        description
      }
    }
    edgeSearch(tailNodeId: $id, first: $first, after: $after) {
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
    edgeCommentSearch(edgeId: $id, first: $first, after: $after) {
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

export const RecentHistory = gql`
  query RecentHistory {
    recentHistory @client {
      packages
    }
  }
`;
