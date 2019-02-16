import React from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { INode } from "../../../types/domain-types";
import styles from "./package-detail.module.scss";

type Props = {
  nodeId: string;
  node: INode | null;
  loading: boolean;
};

const PackageDetail = ({ nodeId, node, loading }: Props) => (
  <article className={styles.container}>
    <h1 className={styles.header}>{nodeId}</h1>
    <ReactPlaceholder
      type="text"
      rows={2}
      ready={!loading && !!node}
      showLoadingAnimation
    >
      <p className={styles.description}>{node && node.description}</p>
      <p className={styles.link}>
        <a href={node ? node.link : ""}>View on npmjs</a>
      </p>
    </ReactPlaceholder>
  </article>
);

export default PackageDetail;
