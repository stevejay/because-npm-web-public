import { stubTrue } from "lodash";
import React from "react";
import { ScrollToTop } from "../../../shared/scroll";
import ContributingSection from "../contributing-section";
import DiscoveringSection from "../discovering-section";
import styles from "./home-page.module.scss";

const HomePage = () => (
  <main className={styles.container}>
    <ScrollToTop />
    <DiscoveringSection />
    <ContributingSection />
  </main>
);

export default React.memo(HomePage, stubTrue);
