import * as _ from "lodash";
import * as React from "react";
import { graphql } from "react-apollo";
import { AutocompleteNodeSearch } from "./graphql/queries";
import MenuItem from "./search-input/menu-item";
import styles from "./typeahead-menu-handler.css";

function TypeaheadMenu({
  data: { autocompleteNodeSearch, loading },
  getItemProps,
  getMenuProps,
  highlightedIndex,
  isOpen
}: any) {
  return (
    <ul {...getMenuProps({ className: styles.menu })}>
      {isOpen &&
        // !loading &&
        autocompleteNodeSearch &&
        !_.isEmpty(autocompleteNodeSearch.nodes) &&
        autocompleteNodeSearch.nodes.map((item: any, index: any) => (
          <MenuItem
            key={item.id}
            item={item}
            {...getItemProps({
              // @ts-ignore
              isActive: highlightedIndex === index,
              // isSelected: selectedItem === item,
              item
            })}
          />
        ))}
    </ul>
  );
}

export default graphql(AutocompleteNodeSearch, {
  options: (props: any) => ({
    variables: {
      first: 10,
      term: props.typeaheadValue
    }
  })
})(TypeaheadMenu);
