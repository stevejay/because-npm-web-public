import Downshift from "downshift";
import { debounce } from "lodash";
import React from "react";
import { withApollo } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { withAppBus, AppBus } from "../../../shared/app-bus";
import { AutocompleteNodeSearch } from "../graphql/queries";
import MenuHandler from "./menu-handler";
import styles from "./search-input.module.scss";

const TYPEAHEAD_DEBOUNCE_MS = 400;

type ApolloProps = {
  client: any;
};

type OwnProps = {
  value: string;
  onChange: any; // (inputValue: string) => void; // TODO fix any
};

type AppBusProps = {
  appBus: AppBus;
};

type AllProps = RouteComponentProps<OwnProps> &
  OwnProps &
  ApolloProps &
  AppBusProps;

type State = {
  typeaheadValue: string;
};

class SearchInput extends React.Component<AllProps, State> {
  private static itemToString(option: any): string {
    return option ? option.id : "";
  }

  public state = { typeaheadValue: "" };

  private inputRef: React.RefObject<HTMLInputElement>;

  private handleTypeheadInput = debounce((inputValue: any) => {
    this.setState({ typeaheadValue: inputValue });
  }, TYPEAHEAD_DEBOUNCE_MS);

  constructor(props: AllProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  public componentDidMount() {
    this.props.appBus.searchBarFocus.addListener(this.handleSearchBarFocus);
    this.props.appBus.searchBarBlur.addListener(this.handleSearchBarBlur);
  }

  public componentWillUnmount() {
    this.props.appBus.searchBarFocus.removeListener(this.handleSearchBarFocus);
    this.props.appBus.searchBarBlur.removeListener(this.handleSearchBarBlur);
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
        onOuterClick={this.handleOuterClick}
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
                autoCapitalize: "off",
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
              {typeaheadValue && typeaheadValue.length > 2 && (
                <MenuHandler
                  getItemProps={getItemProps}
                  getMenuProps={getMenuProps}
                  highlightedIndex={highlightedIndex}
                  typeaheadValue={typeaheadValue}
                  isOpen={isOpen}
                />
              )}
            </div>
          </div>
        )}
      </Downshift>
    );
  }

  private handleOuterClick = () => {
    this.resetTypeahead();
  };

  private handleSelect = (selectedItem: any, stateAndHelpers: any) => {
    if (!selectedItem) {
      return;
    }
    stateAndHelpers.clearSelection();
    this.props.appBus.searchBarBlur.emit();
    this.props.history.push(`/package/${selectedItem.id}`);
    this.resetTypeahead();
  };

  private handleStateChange = (changes: any) => {
    if (changes.type === Downshift.stateChangeTypes.changeInput) {
      this.handleTypeheadInput(changes.inputValue);
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

  private resetTypeahead() {
    this.props.client.writeQuery({
      data: {
        autocompleteNodeSearch: {
          __typename: "NodeAutocompleteResult",
          nodes: []
        }
      },
      query: AutocompleteNodeSearch
    });
    this.setState({ typeaheadValue: "" });
  }
}

// TODO Fix the any here
export default withAppBus<OwnProps>(
  withRouter<RouteComponentProps<OwnProps> & OwnProps & AppBusProps>(
    withApollo<any>(SearchInput)
  )
);
