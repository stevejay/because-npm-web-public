import EdgeList from "../edge-list";
import PackageDetail from "./package-detail";
import React from "react";
import { ErrorMessage } from "../../../shared/content-state";
import { get } from "lodash";
import { INodeByNameSearchResult, INodeByNameSearchVariables } from "../types";
import { NodeByName } from "../graphql/queries";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";

class NodeByNameQuery extends Query<
  INodeByNameSearchResult,
  INodeByNameSearchVariables
> {}

type Props = RouteComponentProps & object;

const PackageDetailHandler = ({ match }: Props) => {
  const nodeId = get(match, "params[0]");
  return (
    <NodeByNameQuery query={NodeByName} variables={{ id: nodeId }}>
      {({ data, loading, error }) =>
        error ? (
          <ErrorMessage error={error} />
        ) : (
          <>
            <PackageDetail
              nodeId={nodeId}
              node={get(data, "node", null)}
              loading={loading}
            />
            <EdgeList />
          </>
        )
      }
    </NodeByNameQuery>
  );
};

export default withRouter<RouteComponentProps>(PackageDetailHandler);
