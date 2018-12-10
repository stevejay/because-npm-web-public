import * as React from "react";
import { shouldUpdate } from "recompact";
import Logo from "../../shared/logo/logo";
import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <Logo />
  </header>
);

export default shouldUpdate(() => false)(Header);
