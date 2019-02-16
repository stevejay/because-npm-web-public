import React from "react";
import { graphql, MutateProps } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { useAppBus } from "../../../shared/app-bus";
import { UpdateSearchParams } from "../graphql/mutations";
import SearchBar from "./search-bar";

type GraphQLVariables = {
  searchTerm: string;
};

type Props = MutateProps<any, GraphQLVariables> & RouteComponentProps;

const SearchBarHandler = ({ mutate, location, history }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const appBus = useAppBus();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const finalSearchTerm = searchTerm.trim();
    if (!finalSearchTerm) {
      return;
    }
    mutate({ variables: { searchTerm: finalSearchTerm } }).then(() => {
      setSearchTerm("");
      appBus.searchBarBlur.emit();
      if (!location.pathname.startsWith("/search")) {
        history.push("/search");
      }
    });
  };

  return (
    <SearchBar
      searchTerm={searchTerm}
      onSearchTermChange={setSearchTerm}
      onSubmit={handleSubmit}
    />
  );
};

export default withRouter(
  graphql<any, GraphQLVariables>(UpdateSearchParams)(SearchBarHandler)
);
