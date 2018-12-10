import * as _ from "lodash";
import * as React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { IEdge } from "../../../types/domain-types";
import EdgeCommentListHandler from "../edge-comment-list/edge-comment-list-handler";
import styles from "./edge.module.scss";

interface IProps {
  expanded: boolean;
  edge: IEdge;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Edge: React.SFC<IProps> = ({ edge, expanded, onClick }) => (
  <article className={styles.container}>
    <header className={styles.headerContainer}>
      <h2 className={styles.heading}>
        to <Link to={`/package/${edge.headNodeId}`}>{edge.headNodeId}</Link>{" "}
        because&hellip;
      </h2>
      <button
        className={styles.headerButton}
        onClick={onClick}
        aria-label="See comments"
      >
        {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    </header>
    {expanded && <EdgeCommentListHandler edgeId={edge.id} />}
  </article>
);

export default Edge;
