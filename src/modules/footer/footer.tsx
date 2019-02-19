import { stubTrue } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../shared/logo";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer} role="contentinfo">
    <div className={styles.logoContainer}>
      <Logo />
      <p className={styles.copyright}>&copy; 2018 Middle Engine Software Ltd</p>
    </div>
    <nav className={styles.nav}>
      <Link to="/terms">Terms</Link>
      <Link to="/privacy">Privacy &amp; Cookies</Link>
      <Link to="/credits">Credits</Link>
    </nav>
  </footer>
);

export default React.memo(Footer, stubTrue);
