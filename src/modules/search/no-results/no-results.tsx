import React from "react";
import { Message } from "../../../shared/content-state";
import { ReactComponent as NoResultsImage } from "./no-results.svg";

const NoResults = () => (
  <Message graphic={NoResultsImage}>
    No matching packages
    <br />
    found in the graph
  </Message>
);

export default NoResults;
