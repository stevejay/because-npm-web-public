import React from "react";
import { INode } from "../../../types/domain-types";
import styles from "./menu-item.module.scss";

type Props = {
  item: INode;
  isActive: boolean;
};

const MenuItem = ({ item, isActive, ...rest }: Props) => (
  <li {...rest} className={`${styles.item} ${isActive ? styles.active : ""}`}>
    <h3 className={styles.header}>{item.id}</h3>
  </li>
);

export default MenuItem;
