export interface INode {
  id: string;
  description?: string;
  link: string;
  edgeCount?: number;
}

export interface IEdge {
  id: string;
  tailNodeId: string;
  headNodeId: string;
}

export interface IEdgeComment {
  id: string;
  comment: string;
  timestampMs: string;
  sourceLink: string;
  sourceUserId: string;
}
