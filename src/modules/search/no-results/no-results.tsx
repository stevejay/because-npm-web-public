import * as React from "react";
import { ContentBox, ContentText } from "src/shared/content-state";
import NoResultsGraphic from "./no-results-graphic";
import styles from "./no-results.css";

const NoResults: React.SFC = () => (
  <ContentBox>
    <NoResultsGraphic className={styles.graphic} />
    <ContentText>
      No matching packages
      <br />
      found in the graph
    </ContentText>
  </ContentBox>
);

export default NoResults;
