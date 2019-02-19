import React from "react";
import styles from "./section.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Section = ({ className = "", children }: Props) => (
  <article className={`${styles.section} ${className}`}>
    <div className={styles.sectionInner}>{children}</div>
  </article>
);

export default Section;
