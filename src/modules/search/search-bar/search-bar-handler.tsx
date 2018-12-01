import * as _ from "lodash";
import * as React from "react";
import { graphql, MutationFn } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { IAppBusProps, withAppBus } from "src/shared/app-bus/app-bus";
import { UpdateSearchParams } from "../graphql/mutations";
import SearchBar from "./search-bar";

interface IGraphqlProps {
  mutate: MutationFn<{ searchTerm: string }>;
}

interface IState {
  searchTerm: string;
}

class SearchBarHandler extends React.Component<
  RouteComponentProps<IAppBusProps> & IGraphqlProps & IAppBusProps,
  IState
> {
  public state = { searchTerm: "" };

  public render() {
    return (
      <SearchBar
        searchTerm={this.state.searchTerm}
        onSearchTermChange={this.handleSearchTermChange}
        onSubmit={this.handleSubmit}
      />
    );
  }

  private handleSearchTermChange = (inputValue: string) => {
    this.setState({ searchTerm: inputValue });
  };

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { mutate, location, history } = this.props;
    const { searchTerm } = this.state;
    const finalSearchTerm = searchTerm.trim();
    if (!finalSearchTerm) {
      return;
    }
    mutate({ variables: { searchTerm: finalSearchTerm } }).then(() => {
      this.setState({ searchTerm: "" });
      this.props.bus.searchBarBlur.emit();
      if (!location.pathname.startsWith("/search")) {
        history.push("/search");
      }
    });
  };
}

export default withAppBus<{}>(
  graphql<IAppBusProps>(UpdateSearchParams)(
    withRouter<
      RouteComponentProps<IAppBusProps> & IGraphqlProps & IAppBusProps
    >(SearchBarHandler)
  )
);
