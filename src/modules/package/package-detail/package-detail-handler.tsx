import * as _ from "lodash";
import * as React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { NodeByName } from "../graphql/queries";
import { INodeByNameSearchResult, INodeByNameSearchVariables } from "../types";
import PackageDetail from "./package-detail";

class NodeByNameQuery extends Query<
  INodeByNameSearchResult,
  INodeByNameSearchVariables
> {}

type Props = RouteComponentProps<{}> & {};

const PackageDetailHandler: React.SFC<Props> = ({ match }) => {
  const nodeId = match.params[0];
  return (
    <NodeByNameQuery query={NodeByName} variables={{ id: nodeId }}>
      {({ data, loading }) => (
        <PackageDetail
          nodeId={nodeId}
          node={_.get(data, "node.node", null)}
          loading={loading}
        />
      )}
    </NodeByNameQuery>
  );
};

export default withRouter<RouteComponentProps<{}>>(PackageDetailHandler);
