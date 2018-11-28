import Downshift from "downshift";
import * as _ from "lodash";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import styles from "./search-input-try.css";
import TypeaheadMenuHandler from "./typeahead-menu-handler";

const TYPEAHEAD_DEBOUNCE_MS = 500;

function itemToString(option: any): string {
  return option ? option.id : "";
}

interface IProps extends RouteComponentProps<any> {}

interface IStateProps {
  typeaheadValue: string;
}

class SearchInputTry extends React.Component<IProps, IStateProps> {
  public state = { typeaheadValue: "" };

  private handleTypeheadInput = _.debounce((changes: any) => {
    // tslint:disable-next-line:no-console
    console.log("typing ahead", changes.inputValue);
    this.setState({ typeaheadValue: changes.inputValue });
  }, TYPEAHEAD_DEBOUNCE_MS);

  public render() {
    const { typeaheadValue } = this.state;

    // tslint:disable-next-line:no-console
    console.log("typeadheadValue", typeaheadValue);

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
          // clearSelection,
          selectedItem,
          highlightedIndex
          // inputValue
        }) => (
          <div className={styles.container}>
            <input
              {...getInputProps({
                autoComplete: "off",
                autoCorrect: "off",
                className: styles.input,
                name: "searchTerm",
                placeholder: "Search for an npm package",
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

    // return (
    //   <input // ref={this.inputRef}
    //     name="searchTerm"
    //     className={styles.input}
    //     aria-label="Enter a package name to search for"
    //     autoComplete="off"
    //     autoCorrect="off"
    //     placeholder="Search for an npm package"
    //     spellCheck={false}
    //   />
    // );
  }

  private handleSelect = (selectedItem: any) => {
    // tslint:disable-next-line:no-console
    console.log("handle select", selectedItem);

    this.setState({ typeaheadValue: "" });
    this.props.history.push(`/package/${selectedItem.id}`);
  };

  private handleStateChange = (changes: any) => {
    if (changes.type === Downshift.stateChangeTypes.changeInput) {
      // tslint:disable-next-line:no-console
      console.log(
        "handle state change inputValue",
        changes,
        Downshift.stateChangeTypes.changeInput
      );

      this.handleTypeheadInput(changes);
    }
  };
}

export default withRouter<RouteComponentProps<IProps>>(SearchInputTry);
