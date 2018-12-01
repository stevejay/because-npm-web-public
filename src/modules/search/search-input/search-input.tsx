import Downshift from "downshift";
import * as _ from "lodash";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { IAppBusProps, withAppBus } from "src/shared/app-bus";
import MenuHandler from "./menu-handler";
import styles from "./search-input.css";

const TYPEAHEAD_DEBOUNCE_MS = 400;

interface IProps {
  value: string;
  onChange: (inputValue: string) => void;
}

interface IState {
  typeaheadValue: string;
}

class SearchInput extends React.Component<
  RouteComponentProps<IProps> & IProps & IAppBusProps,
  IState
> {
  private static itemToString(option: any): string {
    return option ? option.id : "";
  }

  public state = { typeaheadValue: "" };

  private inputRef: React.RefObject<HTMLInputElement>;

  private handleTypeheadInput = _.debounce((changes: any) => {
    this.setState({ typeaheadValue: changes.inputValue });
  }, TYPEAHEAD_DEBOUNCE_MS);

  constructor(props: RouteComponentProps<IProps> & IProps & IAppBusProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  public componentDidMount() {
    this.props.appBus.addFocusSearchBarListener(this.handleSearchBarFocus);
    this.props.appBus.addBlurSearchBarListener(this.handleSearchBarBlur);
  }

  public componentWillUnmount() {
    this.props.appBus.removeFocusSearchBarListener(this.handleSearchBarFocus);
    this.props.appBus.removeBlurSearchBarListener(this.handleSearchBarBlur);
  }

  public render() {
    const { value, onChange } = this.props;
    const { typeaheadValue } = this.state;
    return (
      <Downshift
        inputValue={value}
        itemToString={SearchInput.itemToString}
        onStateChange={this.handleStateChange}
        onInputValueChange={onChange}
        onSelect={this.handleSelect}
      >
        {({
          getInputProps,
          getLabelProps,
          getMenuProps,
          getItemProps,
          isOpen,
          highlightedIndex
        }) => (
          <div className={styles.container}>
            <label {...getLabelProps({ className: styles.label })}>
              Search for an npm package
            </label>
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
              <MenuHandler
                getItemProps={getItemProps}
                getMenuProps={getMenuProps}
                highlightedIndex={highlightedIndex}
                typeaheadValue={typeaheadValue}
                isOpen={isOpen}
              />
            </div>
          </div>
        )}
      </Downshift>
    );
  }

  private handleSelect = (selectedItem: any, stateAndHelpers: any) => {
    if (!selectedItem) {
      return;
    }
    stateAndHelpers.clearSelection();
    this.props.appBus.blurSearchBar();
    this.props.history.push(`/package/${selectedItem.id}`);
    this.setState({ typeaheadValue: "" });
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

export default withAppBus<IProps>(
  withRouter<RouteComponentProps<IProps> & IProps & IAppBusProps>(SearchInput)
);
