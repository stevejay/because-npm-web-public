import * as React from "react";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { shouldUpdate } from "recompact";
import styles from "./search-result.css";

interface IProps {
  result: {
    id: string;
    description: string;
    edgeCount?: number;
  };
}

const EARLY_STOPPING_COUNT = 100;

const SearchResult = ({ result }: IProps) => (
  <li className={styles.container}>
    <Link to={`/package/${result.id}`} className={styles.link}>
      <h2 className={styles.name}>{result.id}</h2>
    </Link>
    <p className={styles.description}> {result.description}</p>
    {!!result.edgeCount && (
      <p className={styles.edgeCount}>
        <FaComment className={styles.icon} />{" "}
        {result.edgeCount < EARLY_STOPPING_COUNT
          ? `linked to around ${result.edgeCount} ${
              result.edgeCount === 1 ? "package" : "packages"
            }`
          : "linked to many packages"}
      </p>
    )}
  </li>
);

export default shouldUpdate(() => false)(SearchResult);
