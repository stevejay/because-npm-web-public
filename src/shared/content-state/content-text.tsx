import React from "react";
import styles from "./content-text.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const ContentText = ({ children, className = "" }: Props) => (
  <h2 className={`${styles.heading} ${className}`}>{children}</h2>
);

export default ContentText;
