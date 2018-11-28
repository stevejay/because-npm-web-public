import * as React from "react";
import styles from "./menu-item.css";

const MenuItem = (
  { item, isActive, ...rest }: any // TODO fix any
) => (
  <li {...rest} className={`${styles.item} ${isActive ? styles.active : ""}`}>
    <h3 className={styles.header}>{item.id}</h3>
    {item.description && (
      <p className={styles.description}>{item.description}</p>
    )}
  </li>
);

export default MenuItem;
