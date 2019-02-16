import { get } from "lodash";
import React from "react";
import { graphql, MutateProps, Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { useAppBus } from "../../../shared/app-bus";
import { UpdateRecentHistoryPackages } from "../graphql/mutations";
import { RecentHistory } from "../graphql/queries";
import { IRecentHistoryResult } from "../types";
import RecentPackages from "./recent-packages";

interface IGraphQLVariables {
  nodeId: string;
}

class RecentHistoryQuery extends Query<IRecentHistoryResult, object> {}

type AllProps = RouteComponentProps & MutateProps<any, IGraphQLVariables>;

const RecentPackagesHandler = ({ mutate, match }: AllProps) => {
  const appBus = useAppBus();
  const nodeId = get(match, "params[0]");

  React.useEffect(() => {
    mutate({ variables: { nodeId } });
  }, [nodeId]);

  return (
    <RecentHistoryQuery query={RecentHistory}>
      {({ data }) => (
        <RecentPackages
          packages={data ? data.recentHistory.packages : null}
          onLinkClick={() => appBus.scrollToTop.emit()}
        />
      )}
    </RecentHistoryQuery>
  );
};

export default graphql<any, IGraphQLVariables>(UpdateRecentHistoryPackages)(
  withRouter<AllProps>(
    React.memo(
      RecentPackagesHandler,
      (prevProps, nextProps) => prevProps.match === nextProps.match
    )
  )
);
