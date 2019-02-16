import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, Observable } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { toIdValue } from "apollo-utilities";
import { get, merge, some } from "lodash";
import log from "loglevel";
import { resolvers as packageResolvers } from "./modules/package";
import { resolvers as searchResolvers } from "./modules/search";

const cache: any = new InMemoryCache({
  cacheRedirects: {
    Query: {
      node: (_, args) =>
        toIdValue(
          cache.config.dataIdFromObject({
            __typename: "Node",
            id: args.id
          })
        )
    }
  }
});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle: any;
      Promise.all([operation])
        .then(() => {
          handle = forward
            ? forward(operation).subscribe({
                complete: observer.complete.bind(observer),
                error: observer.error.bind(observer),
                next: observer.next.bind(observer)
              })
            : null;
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) {
          handle.unsubscribe();
        }
      };
    })
);

const errorLink = onError(({ graphQLErrors, networkError }: any) => {
  if (
    (networkError && networkError.statusCode === 401) ||
    (graphQLErrors &&
      some(
        graphQLErrors,
        error => get(error, "extensions.exception.statusCode") === 401
      ))
  ) {
    client.resetStore();
  } else {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }: any) =>
        log.error(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        )
      );
    }
    if (networkError) {
      log.error(`[Network error]: ${networkError.message || networkError}`);
    }
  }
});

const clientStateLink = withClientState({
  ...merge(searchResolvers, packageResolvers),
  cache
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_SERVER_URI || ""
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, requestLink, clientStateLink, httpLink])
});

export default client;
