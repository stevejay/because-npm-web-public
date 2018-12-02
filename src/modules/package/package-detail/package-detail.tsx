import * as React from "react";
import { INode } from "src/types/domain-types";
import PackageDetailLoader from "./package-detail-loader";
import styles from "./package-detail.css";

interface IProps {
  nodeId: string;
  node: INode;
  loading: boolean;
}

const PackageDetail: React.SFC<IProps> = ({ nodeId, node, loading }) => (
  <article className={styles.container}>
    <h1 className={styles.header}>{nodeId}</h1>
    {!loading && node && (
      <>
        <p className={styles.description}>{node && node.description}</p>
        <p className={styles.link}>
          <a href={node.link}>View on npmjs</a>
        </p>
      </>
    )}
    {(loading || !node) && <PackageDetailLoader />}
  </article>
);

export default PackageDetail;
