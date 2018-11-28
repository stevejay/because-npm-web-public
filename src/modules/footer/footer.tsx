import * as React from "react";
import { Link } from "react-router-dom";
import { shouldUpdate } from "recompact";
import Logo from "src/shared/logo";
import styles from "./footer.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logoContainer}>
      <Logo />
      <p className={styles.copyright}>&copy; 2018 Middle Engine Software Ltd</p>
    </div>
    <ul className={styles.linkContainer}>
      <li className={styles.link}>
        <Link to="/terms">Terms</Link>
      </li>
      <li className={styles.link}>
        <Link to="/privacy">Privacy &amp; Cookies</Link>
      </li>
    </ul>
  </footer>
);

export default shouldUpdate(() => false)(Footer);
