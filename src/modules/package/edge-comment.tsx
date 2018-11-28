import * as React from "react";
import styles from "./edge-comment.css";

function toDisplayDate(timestampMs: number) {
  return new Date(timestampMs).toLocaleDateString();
}

const EdgeComment: React.SFC<{
  edgeComment: any;
}> = ({ edgeComment }) => (
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
