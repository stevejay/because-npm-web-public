import formatTimestamp from "../format-timestamp";

test("formats correctly", () => {
  const actual = formatTimestamp(1234567890);
  expect(actual).toEqual("1970-1-15");
});
