import * as React from "react";
import { Query } from "react-apollo";
import { IBusProps, withBus } from "react-bus";
import { SCROLL_TO_TOP } from "src/shared/bus-events";
import { RecentHistory } from "../graphql/queries";
import { IRecentHistoryResult } from "../types";
import RecentPackages from "./recent-packages";

class RecentHistoryQuery extends Query<IRecentHistoryResult, {}> {}

// tslint:disable-next-line:max-classes-per-file
class RecentPackagesHandler extends React.Component<IBusProps> {
  public render() {
    return (
      <RecentHistoryQuery query={RecentHistory}>
        {({ data }) => (
          <RecentPackages
            packages={data ? data.recentHistory.packages : null}
            onLinkClick={this.handleLinkClick}
          />
        )}
      </RecentHistoryQuery>
    );
  }

  private handleLinkClick = () => {
    this.props.bus.emit(SCROLL_TO_TOP);
  };
}

export default withBus()(RecentPackagesHandler);
