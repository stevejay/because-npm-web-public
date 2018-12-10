import * as React from "react";
import { INode } from "../../../types/domain-types";
import styles from "./menu-item.module.scss";

interface IProps {
  item: INode;
  isActive: boolean;
}

const MenuItem: React.SFC<IProps> = ({ item, isActive, ...rest }) => (
  <li {...rest} className={`${styles.item} ${isActive ? styles.active : ""}`}>
    <h3 className={styles.header}>{item.id}</h3>
  </li>
);

export default MenuItem;
