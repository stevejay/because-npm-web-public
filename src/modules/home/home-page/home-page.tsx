import * as React from "react";
import ScrollToTop from "../../../shared/scroll/scroll-to-top";
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

export default HomePage;
