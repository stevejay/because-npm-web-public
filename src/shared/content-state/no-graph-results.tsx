import * as React from "react";
import ContentBox from "./content-box";
import styles from "./no-graph-results.css";
import NoResultsGraphic from "./no-results-graphic";

interface IProps {
  text?: string;
}

const NoResults: React.SFC<IProps> = ({ text = "No matching packages" }) => (
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
