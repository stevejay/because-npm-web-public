import * as _ from "lodash";
import * as React from "react";
import styles from "./search-page.css";
import SearchResultList from "./search-result-list";

interface IProps {
  results: Array<{
    node: {
      id: string;
      description: string;
      edgeCount?: number;
    };
  }> | null;
}

const SearchPage = ({ results }: IProps) => (
  <main className={styles.container}>
    <SearchResultList results={results} />
  </main>
);

export default SearchPage;
