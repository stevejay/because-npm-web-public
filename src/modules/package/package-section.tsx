import * as React from "react";
import EdgeListHandler from "./edge-list-handler";
import PackageDetailHandler from "./package-detail-handler";
import styles from "./package-section.css";

const PackageSection: React.SFC<{}> = () => (
  <section className={styles.section}>
    <PackageDetailHandler />
    <EdgeListHandler />
  </section>
);

export default PackageSection;
