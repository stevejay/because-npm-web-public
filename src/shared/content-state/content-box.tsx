import * as React from "react";
import styles from "./content-box.module.scss";

interface IProps {
  children: React.ReactNode;
}

const ContentBox: React.SFC<IProps> = ({ children }) => (
  <section className={styles.container}>{children}</section>
);

export default ContentBox;
