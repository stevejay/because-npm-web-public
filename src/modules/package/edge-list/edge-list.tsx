import * as React from "react";
import Button, { ButtonType } from "../../../shared/button";
import { IEdge } from "../../../types/domain-types";
import { ISearchNode } from "../../../types/graphql-types";
import EdgeHandler from "./edge-handler";
import styles from "./edge-list.module.scss";

interface IProps {
  edges: Array<ISearchNode<IEdge>>;
  hasNextPage: boolean;
  onMore: () => void;
}

const EdgeList: React.SFC<IProps> = ({ edges, hasNextPage, onMore }) => (
  <>
    {edges.map((edge, index) => (
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
