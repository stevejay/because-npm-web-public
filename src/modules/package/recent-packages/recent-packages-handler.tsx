import React from "react";
import RecentPackages from "./recent-packages";
import { get } from "lodash";
import { graphql, MutateProps, Query } from "react-apollo";
import { IRecentHistoryResult } from "../types";
import { RecentHistory } from "../graphql/queries";
import { RouteComponentProps, withRouter } from "react-router";
import { UpdateRecentHistoryPackages } from "../graphql/mutations";
import { useAppBus } from "../../../shared/app-bus";

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
