import * as React from "react";
import styles from "./content-text.css";

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const ContentText: React.SFC<IProps> = ({ children, className = "" }) => (
  <h2 className={`${styles.title} ${className}`}>{children}</h2>
);

export default ContentText;
