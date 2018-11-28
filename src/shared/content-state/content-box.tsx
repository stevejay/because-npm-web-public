import * as React from "react";
import styles from "./content-box.css";

interface IProps {
  children: React.ReactNode;
}

const ContentBox = ({ children }: IProps) => (
  <section className={styles.container}>{children}</section>
);

export default ContentBox;
