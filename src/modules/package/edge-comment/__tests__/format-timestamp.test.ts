import formatTimestamp from "../format-timestamp";

test("formats correctly", () => {
  const actual = formatTimestamp(1234567890);
  expect(actual).toMatch(/1970/i);
});
