import * as _ from "lodash";
import * as React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { NodeByName } from "./graphql/queries";
import PackageDetail from "./package-detail";

type Props = RouteComponentProps<{}> & {};

const PackageDetailHandler: React.SFC<Props> = ({ match }) => (
  <Query query={NodeByName} variables={{ id: match.params[0] }}>
    {({ data }) => (
      <PackageDetail
        nodeName={match.params[0]}
        node={_.get(data, "node.node", null)}
      />
    )}
  </Query>
);

export default withRouter<RouteComponentProps<{}>>(PackageDetailHandler);
