import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./expander.module.scss";

type Props = {
  expandedOnMount: boolean;
  headerContent: React.ReactNode;
  children: React.ReactNode;
};

const Expander = ({ expandedOnMount, headerContent, children }: Props) => {
  const [expanded, setExpanded] = React.useState(expandedOnMount);
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.heading}>{headerContent}</h2>
        <button
          className={styles.headerButton}
          onClick={() => setExpanded(!expanded)}
          aria-label="See comments"
        >
          {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {expanded && children}
    </div>
  );
};

export default Expander;
