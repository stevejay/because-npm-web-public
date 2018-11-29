import Downshift from "downshift";
import * as _ from "lodash";
import * as React from "react";
import { IBusProps, withBus } from "react-bus";
import { RouteComponentProps, withRouter } from "react-router";
import { SEARCH_BAR_BLUR, SEARCH_BAR_FOCUS } from "src/shared/bus-events";
import styles from "./search-input-try.css";
import TypeaheadMenuHandler from "./typeahead-menu-handler";

const TYPEAHEAD_DEBOUNCE_MS = 500;

function itemToString(option: any): string {
  return option ? option.id : "";
}

interface IProps {
  value: string;
  onChange: (inputValue: string) => void;
}

interface IState {
  typeaheadValue: string;
}

class SearchInputTry extends React.Component<
  RouteComponentProps<IProps> & IProps & IBusProps,
  IState
> {
  public state = { typeaheadValue: "" };

  private inputRef: React.RefObject<HTMLInputElement>;

  private handleTypeheadInput = _.debounce((changes: any) => {
    this.setState({ typeaheadValue: changes.inputValue });
  }, TYPEAHEAD_DEBOUNCE_MS);

  constructor(props: RouteComponentProps<IProps> & IProps & IBusProps) {
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

  public componentDidUpdate(prevProps: IProps) {
    if (prevProps.value && !this.props.value) {
      this.handleTypeheadInput.cancel();
      this.setState({ typeaheadValue: "" });
    }
  }

  public render() {
    const { value, onChange } = this.props;
    const { typeaheadValue } = this.state;
    return (
      <Downshift
        inputValue={value}
        itemToString={itemToString}
        onStateChange={this.handleStateChange}
        onInputValueChange={onChange}
        onSelect={this.handleSelect}
      >
        {({
          getInputProps,
          getMenuProps,
          getItemProps,
          isOpen,
          selectedItem,
          highlightedIndex
        }) => (
          <div className={styles.container}>
            <input
              {...getInputProps({
                autoComplete: "off",
                autoCorrect: "off",
                className: styles.input,
                name: "searchTerm",
                placeholder: "Search for an npm package",
                ref: this.inputRef,
                spellCheck: false,
                type: "text"
              })}
            />
            <div className={styles.menuContainer}>
              <TypeaheadMenuHandler
                getItemProps={getItemProps}
                getMenuProps={getMenuProps}
                highlightedIndex={highlightedIndex}
                selectedItem={selectedItem}
                typeaheadValue={typeaheadValue}
                isOpen={isOpen}
              />
            </div>
          </div>
        )}
      </Downshift>
    );
  }

  private handleSelect = (selectedItem: any) => {
    this.setState({ typeaheadValue: "" });
    this.props.bus.emit(SEARCH_BAR_BLUR);
    this.props.history.push(`/package/${selectedItem.id}`);
  };

  private handleStateChange = (changes: any) => {
    if (changes.type === Downshift.stateChangeTypes.changeInput) {
      this.handleTypeheadInput(changes);
    }
  };

  private handleSearchBarFocus = () => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  private handleSearchBarBlur = () => {
    if (this.inputRef.current) {
      this.inputRef.current.blur();
    }
  };
}

// fix this any
export default withBus<IProps>()(withRouter<any>(SearchInputTry));
