import React from "react";
import { graphql } from "react-apollo";
import { AutocompleteNodeSearch } from "../graphql/queries";
import Menu from "./menu";

const MAX_AUTOCOMPLETE_ITEMS = 10;

interface IVariables {
  first: number;
  term: string;
}

type QueryProps = {
  data?: any; // TODO try to remove any here.
};

type OwnProps = {
  typeaheadValue: string;
  getItemProps: any;
  getMenuProps: any;
  highlightedIndex: number | null;
  isOpen: boolean;
};

type AllProps = QueryProps & OwnProps;

const TypeaheadMenuHandler = ({
  data,
  getItemProps,
  getMenuProps,
  highlightedIndex,
  isOpen
}: AllProps) => (
  <Menu
    data={data}
    getItemProps={getItemProps}
    getMenuProps={getMenuProps}
    highlightedIndex={highlightedIndex}
    isOpen={isOpen}
  />
);

export default graphql<OwnProps, object, IVariables>(AutocompleteNodeSearch, {
  options: (props: OwnProps) => ({
    variables: {
      first: MAX_AUTOCOMPLETE_ITEMS,
      term: props.typeaheadValue
    }
  })
})(TypeaheadMenuHandler);
