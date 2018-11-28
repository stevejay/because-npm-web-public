import * as React from "react";
import ContentBox from "./content-box";
import ErrorMessage from "./error-message";

const Error = () => (
  <ContentBox>
    <ErrorMessage errorCode={500} title="Error" />
  </ContentBox>
);

export default Error;
