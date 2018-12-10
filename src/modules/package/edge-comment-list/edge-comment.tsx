import * as React from "react";
import { IEdgeComment } from "../../../types/domain-types";
import styles from "./edge-comment.module.scss";
import toDisplayDate from "./to-display-date";

interface IProps {
  edgeComment: IEdgeComment;
}

const EdgeComment: React.SFC<IProps> = ({ edgeComment }) => (
  <li className={styles.listItem}>
    <p className={styles.description}>{edgeComment.comment}</p>
    <p className={styles.info}>
      <span>{toDisplayDate(Number(edgeComment.timestampMs))}</span>
      <a href={edgeComment.sourceLink}>View Tweet</a>
    </p>
  </li>
);

export default EdgeComment;
