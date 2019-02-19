import React from "react";
import { INode } from "../../../types/domain-types";
import { ISearchNode } from "../../../types/graphql-types";
import SearchResultList from "../search-result-list";
import styles from "./search-page.module.scss";

type Props = {
  results: Array<ISearchNode<INode>> | null;
};

const SearchPage = ({ results }: Props) => {
  return (
    <main className={styles.container}>
      <SearchResultList results={results} />
    </main>
  );
};

export default SearchPage;
