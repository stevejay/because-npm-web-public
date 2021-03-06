import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = () => (
  <h2 className={styles.heading} data-testid="site-name">
    <Link to="/" className={styles.link}>
      Because <span>NPM</span>
      <span className="screen-reader-only"> Homepage</span>
    </Link>
  </h2>
);

export default Logo;
