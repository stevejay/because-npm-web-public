import { isEmpty } from "lodash";
import React from "react";
import { ApolloError } from "apollo-client";
import Button, { ButtonType } from "../button";
import { ISearchEdges } from "../../types/graphql-types";
import { ErrorMessage, Message } from "../content-state";
import styles from "./infinite-scroll-list.module.scss";

type Props = {
  loading: boolean;
  loadingWait?: number;
  error: ApolloError | undefined;
  searchData: ISearchEdges<any> | null;
  emptyMessage: string;
  component: any;
  onMoreClick: () => void;
};

const InfiniteScrollList = ({
  loading,
  error,
  searchData,
  emptyMessage,
  component,
  onMoreClick
}: Props) => {
  const showResults = !!searchData && !isEmpty(searchData.edges);
  const showEmptyMessage = !showResults && !loading;

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className={styles.listContainer}>
      {showEmptyMessage && <Message>{emptyMessage}</Message>}
      {showResults && !!searchData && (
        <ul className={styles.list}>
          {searchData.edges.map((edge, index) => (
            <li key={edge.node.id} className={styles.listItem}>
              {React.createElement(component, {
                entity: edge.node,
                isFirst: index === 0
              })}
            </li>
          ))}
          {searchData.pageInfo.hasNextPage && (
            <Button
              type={ButtonType.Secondary}
              onClick={onMoreClick}
              className={styles.moreButton}
            >
              See more comments
            </Button>
          )}
        </ul>
      )}
    </div>
  );
};

export default InfiniteScrollList;
