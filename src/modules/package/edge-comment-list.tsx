import * as React from "react";
import Button, { ButtonType } from "src/shared/button";
import EdgeComment from "./edge-comment";
import styles from "./edge-comment-list.css";
import { IEdgeComment, ISearchNode } from "./types";

interface IProps {
  edges: Array<ISearchNode<IEdgeComment>>;
  hasNextPage: boolean;
  onMore: () => void;
}

const EdgeCommentList: React.SFC<IProps> = ({ edges, hasNextPage, onMore }) => (
  <div className={styles.listContainer}>
    <ul className={styles.list}>
      {edges.map((edge: any) => (
        <EdgeComment key={edge.node.id} edgeComment={edge.node} />
      ))}
      {hasNextPage && (
        <Button
          type={ButtonType.Secondary}
          onClick={onMore}
          className={styles.moreButton}
        >
          See more comments
        </Button>
      )}
    </ul>
  </div>
);

export default EdgeCommentList;
