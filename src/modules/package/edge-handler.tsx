import * as _ from "lodash";
import * as React from "react";
import Edge from "./edge";

interface IProps {
  isFirstEdge: boolean;
  edge: any;
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
    const { edge } = this.props;
    const { expanded } = this.state;
    return (
      <Edge
        edge={edge}
        expanded={expanded}
        onClick={this.handleSeeCommentsClick}
      />
    );
  }

  private handleSeeCommentsClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
}

export default EdgeHandler;
