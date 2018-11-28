const SEARCH_PARAMS_TYPENAME = "SearchParams";

export default {
  defaults: {
    searchParams: {
      __typename: SEARCH_PARAMS_TYPENAME,
      searchTerm: ""
    }
  },
  resolvers: {
    // Need an empty Query obj here because of a bug preventing
    // default client state resetting on reset store:
    // https://github.com/apollographql/apollo-link-state/issues/198
    Mutation: {
      updateSearchParams: (_: any, values: any, { cache }: any) => {
        cache.writeData({
          data: {
            searchParams: {
              __typename: SEARCH_PARAMS_TYPENAME,
              ...values
            }
          }
        });
        return null;
      }
    },
    Query: () => ({})
  }
};
