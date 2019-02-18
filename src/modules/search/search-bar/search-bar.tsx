import React from "react";
import { IoIosSearch } from "react-icons/io";
import SearchInput from "../search-input";
import IconButton from "../../../shared/icon-button";
import styles from "./search-bar.module.scss";

type Props = {
  searchTerm: string;
  onSearchTermChange: (inputValue: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

// TODO aria-live?

const SearchBar = ({ searchTerm, onSearchTermChange, onSubmit }: Props) => (
  <form className={styles.form} onSubmit={onSubmit} role="search">
    <IconButton type="submit" ariaLabel="Submit search" icon={IoIosSearch} />
    <SearchInput value={searchTerm} onChange={onSearchTermChange} />
  </form>
);

export default SearchBar;
