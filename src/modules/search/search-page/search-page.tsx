import React from "react";
import { INode } from "../../../types/domain-types";
import { ISearchNode } from "../../../types/graphql-types";
import SearchResultList from "../search-result-list";
import styles from "./search-page.module.scss";
import Modal from "../search-dialog/modal";

type Props = {
  results: Array<ISearchNode<INode>> | null;
};

const SearchPage = ({ results }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <main className={styles.container}>
      <button onClick={() => setIsOpen(!isOpen)}>Test</button>
      <SearchResultList results={results} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <section
          className={styles.searchDialogContainer}
          role="dialog"
          aria-label="Search dialog"
        >
          hello you
          <input
            type="text"
            defaultValue=""
            placeholder="Search for a package"
          />
          <a href="http://test.com">A link</a>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </section>
      </Modal>
    </main>
  );
};

export default SearchPage;
