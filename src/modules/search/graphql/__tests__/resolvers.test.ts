import resolvers from "../resolvers";

test.each([
  [
    {
      searchParams: {
        searchTerm: "foo",
        __typename: "SearchParams"
      }
    },
    "bar",
    {
      searchParams: {
        searchTerm: "bar",
        __typename: "SearchParams"
      }
    }
  ]
])("%o %s", (currentState: any, searchTerm: string, expected: any) => {
  const writeData = jest.fn();

  resolvers.resolvers.Mutation.updateSearchParams(
    null,
    { searchTerm },
    { cache: { readQuery: () => currentState, writeData } }
  );

  expect(writeData).toHaveBeenCalledTimes(1);
  expect(writeData).toHaveBeenLastCalledWith({
    data: expected
  });
});
