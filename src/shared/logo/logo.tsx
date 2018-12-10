import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = () => (
  <Link to="/" className={styles.link}>
    <h2 className={styles.heading}>
      because
      <span>npm</span>
    </h2>
  </Link>
);

export default Logo;
