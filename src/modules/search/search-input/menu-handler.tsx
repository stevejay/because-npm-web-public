import * as _ from "lodash";
import * as React from "react";
import { graphql } from "react-apollo";
import { AutocompleteNodeSearch } from "../graphql/queries";
import Menu from "./menu";

const MAX_AUTOCOMPLETE_ITEMS = 10;

// TODO rename this component to TypeaheadMenuHandler?

interface IVariables {
  first: number;
  term: string;
}

interface IQueryProps {
  data: any; // TODO try to remove any here.
}

interface IOwnProps {
  typeaheadValue: string;
  getItemProps: any;
  getMenuProps: any;
  highlightedIndex: number | null;
  isOpen: boolean;
}

const MenuHandler: React.SFC<IQueryProps & IOwnProps> = ({
  data,
  getItemProps,
  getMenuProps,
  highlightedIndex,
  isOpen
}) => (
  <Menu
    data={data}
    getItemProps={getItemProps}
    getMenuProps={getMenuProps}
    highlightedIndex={highlightedIndex}
    isOpen={isOpen}
  />
);

export default graphql<IOwnProps, {}, IVariables>(AutocompleteNodeSearch, {
  options: (props: IOwnProps) => ({
    variables: {
      first: MAX_AUTOCOMPLETE_ITEMS,
      term: props.typeaheadValue
    }
  })
})(MenuHandler);
