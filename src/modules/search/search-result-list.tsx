import * as _ from "lodash";
import * as React from "react";
import { IoIosSearch } from "react-icons/io";
import { Message, NoGraphResults } from "src/shared/content-state";
import ScrollToTop from "src/shared/scroll/scroll-to-top";
import SearchResult from "./search-result";
import styles from "./search-result-list.css";

interface IProps {
  results: Array<{
    node: {
      id: string;
      description: string;
      edgeCount?: number;
    };
  }> | null;
}

const SearchResultList = ({ results }: IProps) => {
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
        <NoGraphResults />
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
