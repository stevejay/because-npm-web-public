import * as React from "react";
import styles from "./page.css";

interface IProps {
  children: React.ReactNode;
}

const Page: React.SFC<IProps> = ({ children }) => (
  <div className={styles.page}>{children}</div>
);

export default Page;
