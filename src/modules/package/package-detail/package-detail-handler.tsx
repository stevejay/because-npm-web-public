import { get } from "lodash";
import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { ErrorMessage } from "../../../shared/content-state";
import EdgeList from "../edge-list";
import { NodeByName } from "../graphql/queries";
import { INodeByNameSearchResult, INodeByNameSearchVariables } from "../types";
import PackageDetail from "./package-detail";

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
