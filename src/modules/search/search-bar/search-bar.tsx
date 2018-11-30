import * as React from "react";
import { IoIosSearch } from "react-icons/io";
import SearchInputTry from "../search-input-try";
import Button from "./button";
import styles from "./search-bar.css";

interface IProps {
  searchTerm: string;
  onSearchTermChange: (inputValue: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.SFC<IProps> = ({
  searchTerm,
  onSearchTermChange,
  onSubmit
}) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <Button type="submit" ariaLabel="Submit search" icon={IoIosSearch} />
    <SearchInputTry value={searchTerm} onChange={onSearchTermChange} />
  </form>
);

export default SearchBar;
