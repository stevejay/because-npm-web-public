import gql from "graphql-tag";

export const NodeFragments = {
  coreFields: gql`
    fragment NodeCoreFields on Node {
      id
      description
      link
    }
  `
};

export const EdgeFragments = {
  coreFields: gql`
    fragment EdgeCoreFields on Edge {
      id
      tailNodeId
      headNodeId
    }
  `
};

export const EdgeCommentFragments = {
  coreFields: gql`
    fragment EdgeCommentCoreFields on EdgeComment {
      id
      edgeId
      comment
      sourceLink
      sourceUserId
      timestampMs
    }
  `
};
