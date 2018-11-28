import * as React from "react";
import styles from "./page.css";

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div className={styles.page}>{children}</div>
);

export default Page;
