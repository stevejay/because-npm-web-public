import React from "react";
import styles from "./content-box.module.scss";

type Props = {
  children: React.ReactNode;
};

const ContentBox = ({ children }: Props) => (
  <section className={styles.container}>{children}</section>
);

export default ContentBox;
