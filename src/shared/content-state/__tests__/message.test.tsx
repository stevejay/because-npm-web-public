import React from "react";
import { render } from "react-testing-library";
import Message from "../message";
import { IoIosSearch } from "react-icons/io";

test("displays correctly", async () => {
  const { getByText, container } = render(
    <Message icon={IoIosSearch}>The message</Message>
  );
  expect(container.getElementsByTagName("section").length).toEqual(1);
  const heading = getByText(/The message/i);
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H2");
  expect(container.getElementsByTagName("svg").length).toEqual(1);
});
