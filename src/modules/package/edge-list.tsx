import * as React from "react";
import Button, { ButtonType } from "src/shared/button";
import Edge from "./edge";
import styles from "./edge-list.css";

const EdgeList: React.SFC<{ edges: any; hasNextPage: string; onMore: any }> = ({
  edges,
  hasNextPage,
  onMore
}) => (
  <>
    {edges.map((edge: any, index: number) => (
      <Edge key={edge.node.id} edge={edge.node} isFirstEdge={index === 0} />
    ))}
    {hasNextPage && (
      <Button
        type={ButtonType.secondary}
        onClick={onMore}
        className={styles.moreButton}
      >
        See more alternatives
      </Button>
    )}
  </>
);

export default EdgeList;
