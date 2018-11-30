import Downshift from "downshift";
import * as _ from "lodash";
import * as React from "react";
import { graphql } from "react-apollo";
import { IoIosCloseCircle, IoIosSearch } from "react-icons/io";
import { RouteComponentProps, withRouter } from "react-router";
import { AutocompleteNodeSearch } from "../graphql/queries";
import Button from "./button";
import styles from "./index.css";
import Menu from "./menu";
import MenuItem from "./menu-item";

function ApolloAutocompleteMenu({
  data: { nodeSearch, loading },
  getItemProps,
  getMenuProps,
  highlightedIndex
}: any) {
  if (loading || !nodeSearch || _.isEmpty(nodeSearch.results)) {
    return null;
  }

  return (
    <Menu {...getMenuProps({ refKey: "innerRef" })}>
      {nodeSearch.results.map((item: any, index: any) => (
        <MenuItem
          key={item.id}
          item={item}
          {...getItemProps({
            // @ts-ignore
            isActive: highlightedIndex === index,
            // isSelected: selectedItem === item,
            item
          })}
        />
      ))}
    </Menu>
  );
}

const ApolloAutocompleteMenuWithData = graphql(AutocompleteNodeSearch, {
  options: (props: any) => ({
    variables: {
      first: 10,
      nodeName: props.inputValue.id ? props.inputValue.id : props.inputValue
    }
  })
})(ApolloAutocompleteMenu);

function itemToString(option: any): string {
  return option ? option.label : "";
}

interface IProps extends RouteComponentProps<any> {
  autoFocus?: boolean;
}

interface IState {
  value: string;
}

class SearchInput extends React.Component<IProps, IState> {
  public state = { value: "" };

  private handleTypeheadInput = _.debounce((changes: any) => {
    this.setState({ value: changes.inputValue });
  }, 500);

  public render() {
    const { autoFocus } = this.props;
    const { value } = this.state;
    return (
      <Downshift
        itemToString={itemToString}
        onStateChange={this.handleStateChange}
        onSelect={this.handleSelect}
      >
        {({
          getInputProps,
          getMenuProps,
          getItemProps,
          isOpen,
          clearSelection,
          selectedItem,
          highlightedIndex
        }) => (
          <div className={styles.container}>
            <form
              aria-labelledby="search-input"
              className={styles.inputContainer}
              onSubmit={this.handleSubmitSearch}
              role="Search input"
            >
              <Button
                type="submit"
                ariaLabel="Submit search"
                icon={IoIosSearch}
              />
              <input
                {...getInputProps({
                  autoComplete: "off",
                  autoCorrect: "off",
                  autoFocus: !!autoFocus,
                  className: styles.input,
                  placeholder: "Search for an npm package",
                  spellCheck: false
                })}
              />
              <Button
                ariaLabel="Clear search"
                icon={IoIosCloseCircle}
                onClick={clearSelection}
              />
            </form>
            <div className={styles.menuContainer}>
              {isOpen && (
                <ApolloAutocompleteMenuWithData
                  {...{
                    getItemProps,
                    getMenuProps,
                    highlightedIndex,
                    inputValue: value,
                    selectedItem
                  }}
                />
              )}
            </div>
          </div>
        )}
      </Downshift>
    );
  }

  private handleStateChange = (changes: any) => {
    // if (changes.hasOwnProperty("selectedItem")) {
    //   this.handleItemSelected(changes);
    // } else

    if (changes.hasOwnProperty("inputValue")) {
      this.handleTypeheadInput(changes);
    }
  };

  private handleSelect = (selectedItem: any, stateAndHelpers: object) => {
    // Item selected.
    // tslint:disable-next-line:no-console
    console.log(
      "handleSelect; resetting state.value to empty string; navigating"
    );
    this.setState({ value: "" });
    this.props.history.push(`/package/${selectedItem.id}`);
  };

  // private handleItemSelected = (changes: any) => {
  //   this.setState({ value: changes.selectedItem });
  //   this.props.history.push(`/package/${changes.selectedItem.id}`);
  // };

  private handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // tslint:disable-next-line:no-console
    console.log("handleSubmitSearch", this.state.value);
    this.props.history.push(`/search?searchTerm=${this.state.value}`);
    this.setState({ value: "" });
  };
}

export default withRouter<RouteComponentProps<IProps>>(SearchInput);
