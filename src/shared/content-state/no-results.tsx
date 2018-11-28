import * as React from "react";
import ContentBox from "./content-box";
import NoResultsGraphic from "./no-results-graphic";
import styles from "./no-results.css";

const NoResults = ({ text = "No matching packages" }: { text?: string }) => (
  <ContentBox>
    <NoResultsGraphic className={styles.graphic} />
    <h1 className={styles.title}>
      {text}
      <br />
      found in the graph
    </h1>
  </ContentBox>
);

export default NoResults;
