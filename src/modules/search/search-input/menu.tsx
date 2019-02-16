import classNames from "classnames";
import React from "react";
import styles from "./menu.module.scss";
import { IAutocompleteNodeSearchResult } from "../types";
import { isEmpty } from "lodash";

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
      data.autocompleteNodeSearch.nodes.map((item, index) => {
        const className = classNames(styles.menuItem, {
          [styles.highlighted]: highlightedIndex === index
        });
        return (
          <li key={item.id} className={className} {...getItemProps()}>
            <h3>{item.id}</h3>
          </li>
        );
      })}
  </ul>
);

export default Menu;
