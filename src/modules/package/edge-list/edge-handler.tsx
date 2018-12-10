import * as _ from "lodash";
import * as React from "react";
import { IEdge } from "../../../types/domain-types";
import Edge from "./edge";

interface IProps {
  isFirstEdge: boolean;
  edge: IEdge;
}

interface IState {
  expanded: boolean;
}

class EdgeHandler extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { expanded: this.props.isFirstEdge };
  }

  public render() {
    return (
      <Edge
        edge={this.props.edge}
        expanded={this.state.expanded}
        onClick={this.handleSeeCommentsClick}
      />
    );
  }

  private handleSeeCommentsClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
}

export default EdgeHandler;
