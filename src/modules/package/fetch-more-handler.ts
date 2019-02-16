import { last } from "lodash";

export default function fetchMoreHandler(data: any, paramName: string) {
  const lastEdge: any = last(data[paramName].edges);
  return {
    updateQuery: (prev: any, { fetchMoreResult }: any) => {
      if (!fetchMoreResult) {
        return prev;
      }

      return {
        ...prev,
        [paramName]: {
          ...prev[paramName],
          edges: [
            ...prev[paramName].edges,
            ...fetchMoreResult[paramName].edges
          ],
          pageInfo: fetchMoreResult[paramName].pageInfo
        }
      };
    },
    variables: {
      after: lastEdge ? lastEdge.cursor : ""
    }
  };
}
