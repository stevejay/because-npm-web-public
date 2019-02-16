import React from "react";
import styles from "./section.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Section = ({ className = "", children }: Props) => (
  <section className={`${styles.section} ${className}`}>
    <div className={styles.sectionInner}>{children}</div>
  </section>
);

export default Section;
