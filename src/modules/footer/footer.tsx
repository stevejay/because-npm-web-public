import { stubTrue } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../shared/logo";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logoContainer}>
      <Logo />
      <p className={styles.copyright}>&copy; 2018 Middle Engine Software Ltd</p>
    </div>
    <ul className={styles.linkList}>
      <li>
        <Link to="/terms">Terms</Link>
      </li>
      <li>
        <Link to="/privacy">Privacy &amp; Cookies</Link>
      </li>
      <li>
        <Link to="/credits">Credits</Link>
      </li>
    </ul>
  </footer>
);

export default React.memo(Footer, stubTrue);
