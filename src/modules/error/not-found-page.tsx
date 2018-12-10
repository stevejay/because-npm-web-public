import * as React from "react";
import { ErrorMessage } from "../../shared/content-state";
import ScrollToTop from "../../shared/scroll/scroll-to-top";
// import styles from "./not-found-page.module.scss";

const NotFoundPage = () => (
  <>
    <ScrollToTop />
    <ErrorMessage error={404} />
  </>
);

export default NotFoundPage;
