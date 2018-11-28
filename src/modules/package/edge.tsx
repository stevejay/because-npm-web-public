import * as _ from "lodash";
import * as React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import EdgeCommentListHandler from "./edge-comment-list-handler";
import styles from "./edge.css";

interface IProps {
  isFirstEdge: boolean;
  edge: any;
}

interface IState {
  expanded: boolean;
}

class Edge extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { expanded: this.props.isFirstEdge };
  }

  public render() {
    const { edge } = this.props;
    const { expanded } = this.state;
    return (
      <article className={styles.container}>
        <header className={styles.headerContainer}>
          <h2 className={styles.heading}>
            to <Link to={`/package/${edge.headNodeId}`}>{edge.headNodeId}</Link>{" "}
            because&hellip;
          </h2>
          <button
            className={styles.headerButton}
            onClick={this.handleSeeCommentsClick}
            aria-label="See comments"
          >
            {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </header>
        {expanded && <EdgeCommentListHandler edgeId={edge.id} />}
      </article>
    );
  }

  private handleSeeCommentsClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
}

export default Edge;
