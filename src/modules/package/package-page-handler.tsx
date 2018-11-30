import * as React from "react";
import { graphql, MutateProps } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { UpdateRecentHistoryPackages } from "./graphql/mutations";
import PackagePage from "./package-page";

interface IVariables {
  nodeName: string;
}

type AllProps = RouteComponentProps<{}> & {} & MutateProps<{}, IVariables>;

class PackagePageHandler extends React.Component<AllProps> {
  public componentDidMount() {
    this.updateRecentHistory();
  }

  public componentDidUpdate(prevProps: AllProps) {
    if (this.props.match.params[0] !== prevProps.match.params[0]) {
      this.updateRecentHistory();
    }
  }

  public render() {
    return <PackagePage />;
  }

  private updateRecentHistory() {
    this.props.mutate({ variables: { nodeName: this.props.match.params[0] } });
  }
}

export default graphql<{}, {}, IVariables>(UpdateRecentHistoryPackages)(
  withRouter<AllProps>(PackagePageHandler)
);
