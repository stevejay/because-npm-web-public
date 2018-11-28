import * as React from "react";
import styles from "./package-page.css";
import PackageSection from "./package-section";
import RecentPackagesHandler from "./recent-packages-handler";

const PackagePage: React.SFC<{}> = () => (
  <main className={styles.container}>
    <PackageSection />
    <RecentPackagesHandler />
  </main>
);

export default PackagePage;
