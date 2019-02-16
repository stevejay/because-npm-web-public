import React from "react";
import { IEdgeComment } from "../../../types/domain-types";
import styles from "./edge-comment.module.scss";
import formatTimestamp from "./format-timestamp";

type Props = {
  entity: IEdgeComment;
};

const EdgeComment = ({ entity }: Props) => (
  <div>
    <p className={styles.description}>{entity.comment}</p>
    <p className={styles.info}>
      <span>{formatTimestamp(Number(entity.timestampMs))}</span>
      <a href={entity.sourceLink}>View Tweet</a>
    </p>
  </div>
);

export default EdgeComment;
