import * as React from "react";
import { graphql, MutationFn } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { UpdateRecentHistoryPackages } from "./graphql/mutations";
import PackagePage from "./package-page";

// TODO Fix any:
type Props = RouteComponentProps<{}> & {
  mutate: MutationFn<{ package: any }>;
};

class PackagePageHandler extends React.Component<Props> {
  public componentDidMount() {
    this.updateRecentHistory();
  }

  public componentDidUpdate(prevProps: Props) {
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

export default graphql(UpdateRecentHistoryPackages)(
  withRouter<RouteComponentProps<{}>>(PackagePageHandler)
);
