import * as _ from "lodash";
import * as React from "react";
import { graphql, MutateProps } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { UpdateRecentHistoryPackages } from "../graphql/mutations";
import PackagePage from "./package-page";

interface IVariables {
  nodeId: string;
}

type AllProps = RouteComponentProps<{}> & {} & MutateProps<{}, IVariables>;

class PackagePageHandler extends React.Component<AllProps> {
  public componentDidMount() {
    this.updateRecentHistory();
  }

  public componentDidUpdate(prevProps: AllProps) {
    if (this.getNodeId(this.props) !== this.getNodeId(prevProps)) {
      this.updateRecentHistory();
    }
  }

  public render() {
    return <PackagePage />;
  }

  private updateRecentHistory() {
    this.props.mutate({
      variables: {
        nodeId: this.getNodeId(this.props)
      }
    });
  }

  private getNodeId(props: AllProps) {
    return _.get(props.match, "params[0]");
  }
}

export default graphql<{}, {}, IVariables>(UpdateRecentHistoryPackages)(
  withRouter<any>(PackagePageHandler) // TODO get rid of any here
);
