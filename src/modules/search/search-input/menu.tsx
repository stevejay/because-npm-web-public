import { isEmpty } from "lodash";
import React from "react";
import { IAutocompleteNodeSearchResult } from "../types";
import MenuItem from "./menu-item";
import styles from "./menu.module.scss";

type Props = {
  data: IAutocompleteNodeSearchResult;
  getItemProps: any;
  getMenuProps: any;
  highlightedIndex: number | null;
  isOpen: boolean;
};

const Menu = ({
  data,
  getItemProps,
  getMenuProps,
  highlightedIndex,
  isOpen
}: Props) => (
  <ul
    {...getMenuProps({
      className: `${styles.menu} ${isOpen ? "open" : "closed"}`
    })}
  >
    {isOpen &&
      data &&
      data.autocompleteNodeSearch &&
      !isEmpty(data.autocompleteNodeSearch.nodes) &&
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
