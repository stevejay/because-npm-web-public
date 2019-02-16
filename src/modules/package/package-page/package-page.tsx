import React from "react";
import PackageDetail from "../package-detail";
import RecentPackages from "../recent-packages";
import styles from "./package-page.module.scss";

const PackagePage = () => (
  <main className={styles.container}>
    <section className={styles.section}>
      <PackageDetail />
    </section>
    <aside className={styles.aside}>
      <RecentPackages />
    </aside>
  </main>
);

export default PackagePage;
