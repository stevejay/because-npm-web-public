import * as React from "react";
import { IBusProps, withBus } from "react-bus";
import { IoIosSearch } from "react-icons/io";
import { SEARCH_BAR_BLUR, SEARCH_BAR_FOCUS } from "src/shared/bus-events";
import styles from "./search-bar.css";
import SearchInputTry from "./search-input-try";
import Button from "./search-input/button";

interface IProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// TODO move the focus/blur control to a low-level input component or
// to a higher level.

class SearchBar extends React.Component<IProps & IBusProps> {
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: IProps & IBusProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  public componentDidMount() {
    this.props.bus.on(SEARCH_BAR_FOCUS, this.handleSearchBarFocus);
    this.props.bus.on(SEARCH_BAR_BLUR, this.handleSearchBarBlur);
  }

  public componentWillUnmount() {
    this.props.bus.off(SEARCH_BAR_FOCUS, this.handleSearchBarFocus);
    this.props.bus.off(SEARCH_BAR_BLUR, this.handleSearchBarBlur);
  }

  public render() {
    const { onSubmit } = this.props;
    return (
      <form className={styles.form} onSubmit={onSubmit}>
        <Button type="submit" ariaLabel="Submit search" icon={IoIosSearch} />
        <SearchInputTry />
        {/* <input
          ref={this.inputRef}
          name="searchTerm"
          className={styles.input}
          aria-label="Enter a package name to search for"
          autoComplete="off"
          autoCorrect="off"
          placeholder="Search for an npm package"
          spellCheck={false}
        /> */}
      </form>
    );
  }

  public handleSearchBarFocus = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  public handleSearchBarBlur = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.blur();
    }
  };
}

export default withBus<IProps>()(SearchBar);
