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

const PackageDetailHandler: React.SFC<Props> = ({ match }) => (
  <NodeByNameQuery query={NodeByName} variables={{ id: match.params[0] }}>
    {({ data }) => (
      <PackageDetail
        nodeName={match.params[0]}
        node={_.get(data, "node.node", null)}
      />
    )}
  </NodeByNameQuery>
);

export default withRouter<RouteComponentProps<{}>>(PackageDetailHandler);
