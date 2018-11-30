import * as React from "react";
import styles from "./edge-comment.css";
import toDisplayDate from "./to-display-date";
import { IEdgeComment } from "./types";

interface IProps {
  edgeComment: IEdgeComment;
}

const EdgeComment: React.SFC<IProps> = ({ edgeComment }) => (
  <li className={styles.listItem}>
    <p className={styles.description}>{edgeComment.comment}</p>
    <p className={styles.info}>
      <span>{toDisplayDate(Number(edgeComment.timestampMs))}</span>
      <a href={edgeComment.sourceLink}>
        View Tweet by {edgeComment.sourceUserId}
      </a>
    </p>
  </li>
);

export default EdgeComment;
