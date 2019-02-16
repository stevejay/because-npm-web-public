import { stubTrue } from "lodash";
import React from "react";
import { ScrollToTop } from "../../shared/scroll";
import styles from "./legal-page-wrapper.module.scss";

type Props = {
  children: React.ReactNode;
};

const LegalPageWrapper = ({ children }: Props) => (
  <main className={styles.container}>
    <ScrollToTop />
    <div className={styles.innerContainer}>{children}</div>
  </main>
);

export default React.memo(LegalPageWrapper, stubTrue);
