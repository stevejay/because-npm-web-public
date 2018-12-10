import { INode } from "../../types/domain-types";
import { ISearchEdges } from "../../types/graphql-types";

// node search

export interface INodeSearchVariables {
  after: string | null;
  first: number;
  term: string;
}

export interface INodeSearchResult {
  nodeSearch: ISearchEdges<INode>;
}

export interface IAutocompleteNodeSearchResult {
  autocompleteNodeSearch: {
    nodes: Array<INode>;
  };
}
