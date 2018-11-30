import * as React from "react";
import styles from "./legal-content.css";

interface IProps {
  children: React.ReactNode;
}

const LegalContent: React.SFC<IProps> = ({ children }) => (
  <main className={styles.container}>
    <div className={styles.innerContainer}>{children}</div>
  </main>
);

export default LegalContent;
