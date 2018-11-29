import * as React from "react";
import ContentBox from "./content-box";
import ErrorMessage from "./error-message";

const NotFound: React.SFC = () => (
  <ContentBox>
    <ErrorMessage errorCode={404} title="Not Found" />
  </ContentBox>
);

export default NotFound;
