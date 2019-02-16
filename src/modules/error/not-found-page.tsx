import React from "react";
import { ErrorMessage } from "../../shared/content-state";
import { ScrollToTop } from "../../shared/scroll";

const NotFoundPage = () => (
  <>
    <ScrollToTop />
    <ErrorMessage error={404} />
  </>
);

export default NotFoundPage;
