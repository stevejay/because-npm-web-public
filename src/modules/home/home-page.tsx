import * as React from "react";
import ScrollToTop from "src/shared/scroll/scroll-to-top";
import styles from "./home-page.css";
import ContributeSection from "./sections/contribute";
import DiscoverSectionHandler from "./sections/discover-handler";

const HomePage = () => (
  <main className={styles.container}>
    <ScrollToTop />
    <DiscoverSectionHandler />
    <ContributeSection />
  </main>
);

export default HomePage;
