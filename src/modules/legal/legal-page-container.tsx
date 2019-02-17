import { stubTrue } from "lodash";
import React from "react";
import { ScrollToTop } from "../../shared/scroll";
import styles from "./legal-page-container.module.scss";

type Props = {
  children: React.ReactNode;
};

const LegalPageContainer = ({ children }: Props) => (
  <main className={styles.container}>
    <ScrollToTop />
    <div className={styles.innerContainer}>{children}</div>
  </main>
);

export default React.memo(LegalPageContainer, stubTrue);
