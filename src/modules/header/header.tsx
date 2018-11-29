import * as React from "react";
import { shouldUpdate } from "recompact";
import Logo from "src/shared/logo/logo";
import styles from "./header.css";

const Header = () => (
  <header className={styles.header}>
    <Logo />
  </header>
);

export default shouldUpdate(() => false)(Header);
