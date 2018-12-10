import * as React from "react";
import styles from "./page-main.module.scss";

interface IProps {
  children: React.ReactNode;
}

const PageMain: React.SFC<IProps> = ({ children }) => (
  <div className={styles.page}>{children}</div>
);

export default PageMain;
