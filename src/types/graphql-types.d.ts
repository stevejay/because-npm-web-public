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

export interface IFetchMoreArg<T> {
  updateQuery: (prev: T, { fetchMoreResult }: { fetchMoreResult: T }) => T;
  variables: {
    after: string;
  };
}

export type IFetchMoreFunc<T> = (arg: IFetchMoreArg<T>) => void;
