import * as React from "react";
import ContentLoader from "react-content-loader";
import styles from "./package-detail.css";
import { INode } from "./types";

const PackageDetail: React.SFC<{ nodeName: string; node: INode }> = ({
  nodeName,
  node
}) => (
  <article className={styles.container}>
    <h1 className={styles.header}>{node ? node.id : nodeName}</h1>
    {node && (
      <>
        <p className={styles.description}>{node ? node.description : ""}</p>
        <p className={styles.link}>
          <a href={node.link}>View on npmjs</a>
        </p>
      </>
    )}
    {!node && (
      <ContentLoader
        height={25}
        width={310}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="0" rx="3" ry="3" width="310" height="8" />
        <rect x="0" y="16" rx="3" ry="3" width="300" height="8" />
      </ContentLoader>
    )}
  </article>
);

export default PackageDetail;
