import { isEmpty, isNil } from "lodash";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Message } from "../../../shared/content-state";
import { ScrollToTop } from "../../../shared/scroll";
import { INode } from "../../../types/domain-types";
import { ISearchNode } from "../../../types/graphql-types";
import NoResults from "../no-results";
import SearchResult from "../search-result";
import styles from "./search-result-list.module.scss";

type Props = {
  results: Array<ISearchNode<INode>> | null;
};

const SearchResultList = ({ results }: Props) => {
  if (isNil(results)) {
    return (
      <>
        <ScrollToTop />
        <Message icon={IoIosSearch}>
          Enter a search term above
          <br />
          to see results here
        </Message>
      </>
    );
  }

  if (isEmpty(results)) {
    return (
      <>
        <ScrollToTop />
        <NoResults />
      </>
    );
  }

  return (
    <ul className={styles.container}>
      {results.map(result => (
        <li key={result.node.id}>
          <SearchResult result={result.node} />
        </li>
      ))}
    </ul>
  );
};

export default SearchResultList;
