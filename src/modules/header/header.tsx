import { stubTrue } from "lodash";
import React from "react";
import Logo from "../../shared/logo";
import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.header} role="banner">
    <Logo />
  </header>
);

export default React.memo(Header, stubTrue);
