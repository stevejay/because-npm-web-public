import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = () => (
  <h2 className={styles.heading}>
    <Link to="/" className={styles.link}>
      Because
      <span>NPM</span>
    </Link>
  </h2>
);

export default Logo;
