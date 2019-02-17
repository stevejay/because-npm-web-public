import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./expander.module.scss";

type Props = {
  expandedOnMount: boolean;
  headerContent: React.ReactNode;
  buttonAriaLabel: string;
  children: React.ReactNode;
};

const Expander = ({
  expandedOnMount,
  headerContent,
  buttonAriaLabel,
  children
}: Props) => {
  const [expanded, setExpanded] = React.useState(expandedOnMount);
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.heading}>{headerContent}</h2>
        <button
          className={styles.headerButton}
          onClick={() => setExpanded(!expanded)}
          aria-label={buttonAriaLabel}
        >
          {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {expanded && children}
    </div>
  );
};

export default Expander;
