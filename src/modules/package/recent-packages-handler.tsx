import * as React from "react";
import { Query } from "react-apollo";
import { IBusProps, withBus } from "react-bus";
import { SCROLL_TO_TOP } from "src/shared/bus-events";
import { RecentHistory } from "./graphql/queries";
import RecentPackages from "./recent-packages";

class RecentPackagesHandler extends React.Component<IBusProps> {
  public render() {
    return (
      <Query query={RecentHistory}>
        {({ data }) => (
          <RecentPackages
            packages={data.recentHistory.packages}
            onLinkClick={this.handleLinkClick}
          />
        )}
      </Query>
    );
  }

  private handleLinkClick = () => {
    this.props.bus.emit(SCROLL_TO_TOP);
  };
}

export default withBus()(RecentPackagesHandler);
