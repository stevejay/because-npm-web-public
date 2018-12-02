import { INode } from "src/types/domain-types";
import { ISearchEdges } from "src/types/graphql-types";

// edge search

export interface IEdgeSearchVariables {
  after: string | null;
  first: number;
  tailNodeId: string;
}

export interface IEdgeSearchResult {
  edgeSearch: ISearchEdges<IEdge>;
}

// edge comment search

export interface IEdgeCommentSearchVariables {
  after: string | null;
  edgeId: string;
  first: number;
}

export interface IEdgeCommentSearchResult {
  edgeCommentSearch: ISearchEdges<IEdgeComment>;
}

// recent history

export interface IRecentHistoryResult {
  recentHistory: {
    packages: string[];
  };
}

// node by name search

export interface INodeByNameSearchVariables {
  id: string;
}

export interface INodeByNameSearchResult {
  node: {
    node: INode;
  };
}

// node page search

export interface INodePageSearchVariables {
  after: string | null;
  id: string;
  first: number;
}

export interface INodePageSearchResult {
  edgeSearch: ISearchEdges<IEdge>;
  edgeCommentSearch: ISearchEdges<IEdgeComment>;
  node: {
    node: INode;
  };
}
