export interface INode {
  id: string;
  description?: string;
  link: string;
}

export interface IEdge {
  id: string;
  tailNodeId: string;
  headNodeId: string;
}

export interface IEdgeComment {
  id: string;
  comment: string;
  timestampMs: string;
  sourceLink: string;
  sourceUserId: string;
}

export interface ISearchNode<T> {
  node: T;
  cursor: string;
}

export interface ISearchEdges<T> {
  edges: Array<ISearchNode<T>>;
  pageInfo: {
    hasNextPage: boolean;
  };
}

export interface IEdgeSearchVariables {
  after: string | null;
  first: number;
  tailNodeId: string;
}

export interface IEdgeSearchResult {
  edgeSearch: ISearchEdges<IEdge>;
}

export interface IEdgeCommentSearchVariables {
  after: string | null;
  edgeId: string;
  first: number;
}

export interface IEdgeCommentSearchResult {
  edgeCommentSearch: ISearchEdges<IEdgeComment>;
}

export interface IFetchMoreArg<T> {
  updateQuery: (prev: T, { fetchMoreResult }: { fetchMoreResult: T }) => T;
  variables: {
    after: string;
  };
}

export type IFetchMoreFunc<T> = (arg: IFetchMoreArg<T>) => void;
