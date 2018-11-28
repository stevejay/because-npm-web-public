import * as React from "react";
import { IBusProps, withBus } from "react-bus";
import { RouteComponentProps, withRouter } from "react-router";
import { SEARCH_BAR_FOCUS } from "src/shared/bus-events";
import DiscoveringSection from "./discovering-section";

class DiscoveringSectionHandler extends React.Component<
  RouteComponentProps<{}> & IBusProps
> {
  public render() {
    return <DiscoveringSection onSearchClick={this.handleSearchClick} />;
  }

  private handleSearchClick = () => {
    this.props.bus.emit(SEARCH_BAR_FOCUS);
    this.props.history.push("/search");
  };
}

export default withBus<{}>()(
  withRouter<RouteComponentProps<{}>>(DiscoveringSectionHandler)
);
