import * as React from "react";
import { Query } from "react-apollo";
import { IAppBusProps, withAppBus } from "src/shared/app-bus/app-bus";
import { RecentHistory } from "../graphql/queries";
import { IRecentHistoryResult } from "../types";
import RecentPackages from "./recent-packages";

class RecentHistoryQuery extends Query<IRecentHistoryResult, {}> {}

// tslint:disable-next-line:max-classes-per-file
class RecentPackagesHandler extends React.Component<IAppBusProps> {
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
    this.props.bus.scrollToTop.emit();
  };
}

export default withAppBus<{}>(RecentPackagesHandler);
