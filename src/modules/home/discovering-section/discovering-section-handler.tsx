import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { IAppBusProps, withAppBus } from "src/shared/app-bus";
import DiscoveringSection from "./discovering-section";

class DiscoveringSectionHandler extends React.Component<
  RouteComponentProps<{}> & IAppBusProps
> {
  public render() {
    return <DiscoveringSection onSearchClick={this.handleSearchClick} />;
  }

  private handleSearchClick = () => {
    this.props.appBus.focusSearchBar();
    this.props.history.push("/search");
  };
}

export default withAppBus<{}>(
  withRouter<RouteComponentProps<{}> & IAppBusProps>(DiscoveringSectionHandler)
);
