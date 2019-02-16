import getErrorStatusCode from "../get-error-status-code";

test.each([
  [404, 404],
  [null, 500],
  [{ status: "501" }, 501],
  [{ statusCode: 501 }, 501],
  [
    {
      graphQLErrors: [{ message: "Response code 404 (Not Found)" }]
    },
    404
  ],
  [
    {
      graphQLErrors: [{ message: "Foo" }]
    },
    500
  ],
  [{}, 500]
])("%o", (error, expected) => {
  const actual = getErrorStatusCode(error);
  expect(actual).toEqual(expected);
});
