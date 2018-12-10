import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { IAppBusProps, withAppBus } from "../../../shared/app-bus/app-bus";
import DiscoveringSection from "./discovering-section";

class DiscoveringSectionHandler extends React.Component<
  RouteComponentProps<{}> & IAppBusProps
> {
  public render() {
    return <DiscoveringSection onSearchClick={this.handleSearchClick} />;
  }

  private handleSearchClick = () => {
    this.props.bus.searchBarFocus.emit();
    this.props.history.push("/search");
  };
}

export default withAppBus<{}>(
  withRouter<RouteComponentProps<{}> & IAppBusProps>(DiscoveringSectionHandler)
);
