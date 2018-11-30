import * as React from "react";
import Button, { ButtonType } from "src/shared/button";
import { IEdge } from "src/types/domain-types";
import { ISearchNode } from "src/types/graphql-types";
import EdgeHandler from "./edge-handler";
import styles from "./edge-list.css";

interface IProps {
  edges: Array<ISearchNode<IEdge>>;
  hasNextPage: boolean;
  onMore: () => void;
}

const EdgeList: React.SFC<IProps> = ({ edges, hasNextPage, onMore }) => (
  <>
    {edges.map((edge, index: number) => (
      <EdgeHandler
        key={edge.node.id}
        edge={edge.node}
        isFirstEdge={index === 0}
      />
    ))}
    {hasNextPage && (
      <Button
        type={ButtonType.Secondary}
        onClick={onMore}
        className={styles.moreButton}
      >
        See more alternatives
      </Button>
    )}
  </>
);

export default EdgeList;
