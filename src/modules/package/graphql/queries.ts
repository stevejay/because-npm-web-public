import gql from "graphql-tag";
import {
  EdgeCommentFragments,
  EdgeFragments,
  NodeFragments
} from "../../../shared/graphql";

export const NodePage = gql`
  query NodePage($id: String!, $first: Int, $after: String) {
    node(id: $id) {
      ...NodeCoreFields
    }
    edgeSearch(tailNodeId: $id, first: $first, after: $after) {
      edges {
        node {
          ...EdgeCoreFields
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
          ...EdgeCommentCoreFields
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
  ${NodeFragments.coreFields}
  ${EdgeFragments.coreFields}
  ${EdgeCommentFragments.coreFields}
`;

export const NodeByName = gql`
  query Node($id: String!) {
    node(id: $id) {
      ...NodeCoreFields
    }
  }
  ${NodeFragments.coreFields}
`;

export const EdgeSearch = gql`
  query EdgeSearch($tailNodeId: String!, $first: Int, $after: String) {
    edgeSearch(tailNodeId: $tailNodeId, first: $first, after: $after) {
      edges {
        node {
          ...EdgeCoreFields
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
  ${EdgeFragments.coreFields}
`;

export const EdgeCommentSearch = gql`
  query EdgeCommentSearch($edgeId: String!, $first: Int, $after: String) {
    edgeCommentSearch(edgeId: $edgeId, first: $first, after: $after) {
      edges {
        node {
          ...EdgeCommentCoreFields
        }
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }
  }
  ${EdgeCommentFragments.coreFields}
`;

export const RecentHistory = gql`
  query RecentHistory {
    recentHistory @client {
      packages
    }
  }
`;
