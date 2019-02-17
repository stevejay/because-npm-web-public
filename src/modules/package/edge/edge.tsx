import { stubTrue } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { IEdge } from "../../../types/domain-types";
import Expander from "../../../shared/expander";
import EdgeCommentList from "../edge-comment-list";

type Props = {
  isFirst: boolean;
  entity: IEdge;
};

const Edge = ({ isFirst, entity }: Props) => {
  const headerContent = (
    <span>
      to <Link to={`/package/${entity.headNodeId}`}>{entity.headNodeId}</Link>{" "}
      because&hellip;
    </span>
  );

  return (
    <Expander
      expandedOnMount={isFirst}
      headerContent={headerContent}
      buttonAriaLabel="See comments"
    >
      <EdgeCommentList edgeId={entity.id} />
    </Expander>
  );
};

export default React.memo(Edge, stubTrue);
