import React from "react";
import { render } from "react-testing-library";
import Expander from "../expander";
import userEvent from "user-event";

function renderExpander(expandedOnMount: boolean) {
  return render(
    <Expander
      expandedOnMount={expandedOnMount}
      headerContent="Header text"
      buttonAriaLabel="Button aria label"
    >
      <div data-testid="child" />
    </Expander>
  );
}

test("header renders with expected content", async () => {
  const { getByLabelText, getByText } = renderExpander(false);
  const heading = getByText(/Header text/i);
  expect(heading.tagName).toEqual("H2");
  expect(getByLabelText(/Button aria label/i)).toBeInTheDocument();
});

test("can be opened", async () => {
  const { getByLabelText, queryByTestId } = renderExpander(false);
  expect(queryByTestId("child")).toBeNull();
  userEvent.click(getByLabelText(/Button aria label/i));
  expect(queryByTestId("child")).not.toBeNull();
});

test("can be closed", async () => {
  const { getByLabelText, queryByTestId } = renderExpander(true);
  expect(queryByTestId("child")).not.toBeNull();
  userEvent.click(getByLabelText(/Button aria label/i));
  expect(queryByTestId("child")).toBeNull();
});
