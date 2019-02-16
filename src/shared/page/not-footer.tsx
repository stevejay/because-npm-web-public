import React from "react";
import styles from "./not-footer.module.scss";

type Props = {
  children: React.ReactNode;
};

const NotFooter = ({ children }: Props) => (
  <div className={styles.page}>{children}</div>
);

export default NotFooter;
