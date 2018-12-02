import * as _ from "lodash";
import * as React from "react";
import { IoIosSearch } from "react-icons/io";
import { Message } from "src/shared/content-state";
import ScrollToTop from "src/shared/scroll/scroll-to-top";
import { INode } from "src/types/domain-types";
import { ISearchNode } from "src/types/graphql-types";
import NoResults from "../no-results";
import SearchResult from "./search-result";
import styles from "./search-result-list.css";

interface IProps {
  results: Array<ISearchNode<INode>> | null;
}

const SearchResultList: React.SFC<IProps> = ({ results }) => {
  if (_.isNil(results)) {
    return (
      <React.Fragment>
        <ScrollToTop />
        <Message icon={IoIosSearch}>
          Enter a search term above
          <br />
          to see results here
        </Message>
      </React.Fragment>
    );
  }
  if (_.isEmpty(results)) {
    return (
      <React.Fragment>
        <ScrollToTop />
        <NoResults />
      </React.Fragment>
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
