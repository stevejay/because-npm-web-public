import * as React from "react";
import { ErrorMessage } from "src/shared/content-state";
import ScrollToTop from "src/shared/scroll/scroll-to-top";
// import styles from "./not-found-page.css";

const NotFoundPage = () => (
  <>
    <ScrollToTop />
    <ErrorMessage error={404} />
  </>
);

export default NotFoundPage;
