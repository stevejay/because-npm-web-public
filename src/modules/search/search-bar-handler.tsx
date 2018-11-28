import * as _ from "lodash";
import * as React from "react";
import { graphql, MutationFn } from "react-apollo";
import { IBusProps, withBus } from "react-bus";
import { RouteComponentProps, withRouter } from "react-router";
import { SEARCH_BAR_BLUR } from "src/shared/bus-events";
import { UpdateSearchParams } from "./graphql/mutations";
import SearchBar from "./search-bar";

interface IGraphqlProps {
  mutate: MutationFn<{ searchTerm: string }>;
}

class SearchBarHandler extends React.Component<
  RouteComponentProps<{}> & IGraphqlProps & IBusProps
> {
  public render() {
    return <SearchBar onSubmit={this.handleSubmit} />;
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { mutate, location, history } = this.props;
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    const searchTerm = (data.get("searchTerm") || "").toString().trim();
    if (!searchTerm) {
      return;
    }

    mutate({ variables: { searchTerm } }).then(() => {
      form.reset();
      this.props.bus.emit(SEARCH_BAR_BLUR);
      if (!location.pathname.startsWith("/search")) {
        history.push("/search");
      }
    });
  };
}

export default withBus<{}>()(
  graphql(UpdateSearchParams)(
    withRouter<RouteComponentProps<{}>>(SearchBarHandler)
  )
);
