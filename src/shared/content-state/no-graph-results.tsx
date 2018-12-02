import * as React from "react";
import ContentBox from "./content-box";
import ContentText from "./content-text";
import styles from "./no-graph-results.css";
import NoResultsGraphic from "./no-results-graphic";

interface IProps {
  text?: string;
}

const NoResults: React.SFC<IProps> = ({ text = "No matching packages" }) => (
  <ContentBox>
    <NoResultsGraphic className={styles.graphic} />
    <ContentText>
      {text}
      <br />
      found in the graph
    </ContentText>
  </ContentBox>
);

export default NoResults;
