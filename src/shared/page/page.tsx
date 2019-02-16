import React from "react";
import styles from "./page.module.scss";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => (
  <div className={styles.page}>{children}</div>
);

export default Page;
