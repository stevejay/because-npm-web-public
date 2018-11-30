import Downshift from "downshift";
import * as _ from "lodash";
import * as React from "react";
import { IBusProps, withBus } from "react-bus";
import { RouteComponentProps, withRouter } from "react-router";
import { SEARCH_BAR_BLUR, SEARCH_BAR_FOCUS } from "src/shared/bus-events";
import MenuHandler from "./menu-handler";
import styles from "./search-input-try.css";

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

    // tslint:disable-next-line:no-console
    console.log(
      "handleTypeheadInput - set typeaheadValue to",
      changes.inputValue
    );
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

  // public componentDidUpdate(prevProps: IProps) {
  //   if (prevProps.value && !this.props.value) {
  //     this.handleTypeheadInput.cancel();
  //     this.setState({ typeaheadValue: "" });

  //     // tslint:disable-next-line:no-console
  //     console.log("componentDidUpdate - typeaheadValue cleared");
  //   }
  // }

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
    this.props.bus.emit(SEARCH_BAR_BLUR);

    this.props.history.push(`/package/${selectedItem.id}`);
    // tslint:disable-next-line:no-console
    console.log("handleSelect - typeaheadValue cleared", selectedItem.id);

    stateAndHelpers.setState({
      inputValue: "",
      isOpen: false,
      selectedItem: null // This is the answer!!
    });

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

export default withBus<IProps>()(
  withRouter<RouteComponentProps<IProps>>(SearchInputTry)
);
