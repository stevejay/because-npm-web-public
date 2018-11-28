import * as React from "react";
import ScrollToTop from "src/shared/scroll/scroll-to-top";
import ContributingSection from "./contributing-section";
import DiscoveringSection from "./discovering-section";
import styles from "./home-page.css";

const HomePage = () => (
  <main className={styles.container}>
    <ScrollToTop />
    <DiscoveringSection />
    <ContributingSection />
  </main>
);

export default HomePage;
