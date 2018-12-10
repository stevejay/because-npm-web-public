import * as _ from "lodash";
import * as React from "react";
import { IoIosSearch } from "react-icons/io";
import { Message } from "../../../shared/content-state";
import ScrollToTop from "../../../shared/scroll/scroll-to-top";
import { INode } from "../../../types/domain-types";
import { ISearchNode } from "../../../types/graphql-types";
import NoResults from "../no-results";
import SearchResult from "./search-result";
import styles from "./search-result-list.module.scss";

interface IProps {
  results: Array<ISearchNode<INode>> | null;
}

const SearchResultList: React.SFC<IProps> = ({ results }) => {
  if (_.isNil(results)) {
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
  if (_.isEmpty(results)) {
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
        <SearchResult key={result.node.id} result={result.node} />
      ))}
    </ul>
  );
};

export default SearchResultList;
