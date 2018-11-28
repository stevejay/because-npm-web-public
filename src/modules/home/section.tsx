import * as React from "react";
import styles from "./section.css";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Section = ({ className, children }: IProps) => (
  <section className={`${styles.section} ${className || ""}`}>
    <div className={styles.inner}>{children}</div>
  </section>
);

export default Section;
