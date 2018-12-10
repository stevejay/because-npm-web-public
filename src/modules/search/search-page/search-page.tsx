import * as _ from "lodash";
import * as React from "react";
import { INode } from "../../../types/domain-types";
import { ISearchNode } from "../../../types/graphql-types";
import SearchResultList from "../search-result-list";
import styles from "./search-page.module.scss";

interface IProps {
  results: Array<ISearchNode<INode>> | null;
}

const SearchPage: React.SFC<IProps> = ({ results }) => (
  <main className={styles.container}>
    <SearchResultList results={results} />
  </main>
);

export default SearchPage;
