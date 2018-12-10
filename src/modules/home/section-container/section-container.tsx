import * as React from "react";
import styles from "./section-container.module.scss";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const SectionContainer: React.SFC<IProps> = ({ className = "", children }) => (
  <section className={`${styles.section} ${className}`}>
    <div className={styles.inner}>{children}</div>
  </section>
);

export default SectionContainer;
