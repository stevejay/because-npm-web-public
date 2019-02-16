import React from "react";
import { cleanup, render } from "react-testing-library";
import Message from "../message";
import { IoIosSearch } from "react-icons/io";

afterEach(cleanup);

test("displays correctly", async () => {
  const { container } = render(
    <Message icon={IoIosSearch}>The message</Message>
  );
  expect(container).toMatchSnapshot();
});
