import * as React from "react";
import PackageDetail from "../package-detail";
import RecentPackages from "../recent-packages";
import styles from "./package-page.css";

const PackagePage: React.SFC = () => (
  <main className={styles.container}>
    <section className={styles.section}>
      <PackageDetail />
    </section>
    <RecentPackages />
  </main>
);

export default PackagePage;
