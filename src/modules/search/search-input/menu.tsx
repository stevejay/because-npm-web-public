import * as _ from "lodash";
import * as React from "react";
import { IAutocompleteNodeSearchResult } from "../types";
import MenuItem from "./menu-item";
import styles from "./menu.module.scss";

interface IProps {
  data: IAutocompleteNodeSearchResult;
  getItemProps: any;
  getMenuProps: any;
  highlightedIndex: number | null;
  isOpen: boolean;
}

const Menu: React.SFC<IProps> = ({
  data,
  getItemProps,
  getMenuProps,
  highlightedIndex,
  isOpen
}) => (
  <ul
    {...getMenuProps({
      className: `${styles.menu} ${isOpen ? "open" : "closed"}`
    })}
  >
    {isOpen &&
      data &&
      data.autocompleteNodeSearch &&
      !_.isEmpty(data.autocompleteNodeSearch.nodes) &&
      data.autocompleteNodeSearch.nodes.map((item, index) => (
        <MenuItem
          key={item.id}
          item={item}
          {...getItemProps({
            isActive: highlightedIndex === index,
            item
          })}
        />
      ))}
  </ul>
);

export default Menu;
