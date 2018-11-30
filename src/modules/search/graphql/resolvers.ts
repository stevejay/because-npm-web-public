const SEARCH_PARAMS_TYPENAME = "SearchParams";

interface ISearchParamsSlice {
  searchParams: {
    searchTerm: string;
    __typename: string;
  };
}

export default {
  defaults: {
    searchParams: {
      __typename: SEARCH_PARAMS_TYPENAME,
      searchTerm: ""
    }
  },
  resolvers: {
    Mutation: {
      updateSearchParams: (__: any, values: any, { cache }: any) => {
        const searchTerm: string = values.searchTerm;
        cache.writeData({
          data: createUpdatedSearchParamsSlice(searchTerm)
        });
        return null;
      }
    },
    // Need an empty Query obj here because of a bug preventing
    // default client state resetting on reset store:
    // https://github.com/apollographql/apollo-link-state/issues/198
    Query: () => ({})
  }
};

export function createUpdatedSearchParamsSlice(
  searchTerm: string
): ISearchParamsSlice {
  return {
    searchParams: {
      __typename: SEARCH_PARAMS_TYPENAME,
      searchTerm
    }
  };
}
