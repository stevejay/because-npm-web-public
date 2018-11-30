// import { GetItemPropsOptions, GetMenuPropsOptions } from "downshift";
import * as _ from "lodash";
import * as React from "react";
import { graphql } from "react-apollo";
import { AutocompleteNodeSearch } from "../graphql/queries";
import styles from "./menu-handler.css";
import MenuItem from "./menu-item";

interface IVariables {
  first: number;
  term: string;
}

interface IQueryProps {
  data: any;
}

interface IProps {
  typeaheadValue: string;
  getItemProps: any;
  getMenuProps: any;
  highlightedIndex: number | null;
  isOpen: boolean;
}

const MenuHandler: React.SFC<IQueryProps & IProps> = ({
  data: { autocompleteNodeSearch },
  getItemProps,
  getMenuProps,
  highlightedIndex,
  isOpen
}) => (
  <ul {...getMenuProps({ className: styles.menu })}>
    {isOpen &&
      autocompleteNodeSearch &&
      !_.isEmpty(autocompleteNodeSearch.nodes) &&
      autocompleteNodeSearch.nodes.map((item: any, index: any) => (
        <MenuItem
          key={item.id}
          item={item}
          {...getItemProps({
            // @ts-ignore
            isActive: highlightedIndex === index,
            item
          })}
        />
      ))}
  </ul>
);

export default graphql<IProps, {}, IVariables>(AutocompleteNodeSearch, {
  options: (props: IProps) => ({
    variables: {
      first: 10,
      term: props.typeaheadValue
    }
  })
})(MenuHandler);
