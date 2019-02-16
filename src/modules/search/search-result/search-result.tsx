import { stubTrue } from "lodash";
import React from "react";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { INode } from "../../../types/domain-types";
import styles from "./search-result.module.scss";

type Props = {
  result: INode;
};

const EARLY_STOPPING_COUNT = 100;

const SearchResult = ({ result }: Props) => (
  <div className={styles.container}>
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
  </div>
);

export default React.memo(SearchResult, stubTrue);
