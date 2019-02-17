import IconButton from "../icon-button";
import React from "react";
import { render } from "react-testing-library";
import { noop } from "lodash";
import { IoIosAdd } from "react-icons/io";
import userEvent from "user-event";

function renderIconButton(handleCallback = noop) {
  return render(
    <IconButton
      ariaLabel="The label"
      icon={IoIosAdd}
      type="button"
      onClick={handleCallback}
    />
  );
}

test("renders as a button", async () => {
  const { getByLabelText } = renderIconButton();
  const button = getByLabelText(/The label/i);
  expect(button).toBeInTheDocument();
  expect(button.tagName).toEqual("BUTTON");
  expect(button.getAttribute("type")).toEqual("button");
});

test("renders the icon within the button", async () => {
  const { getByLabelText } = renderIconButton();
  const button = getByLabelText(/The label/i);
  expect(button.getElementsByTagName("svg").length).toEqual(1);
});

test("wires up the onClick callback", async () => {
  const handleClick = jest.fn();
  const { getByLabelText } = renderIconButton(handleClick);
  expect(handleClick).toHaveBeenCalledTimes(0);
  const button = getByLabelText(/The label/i);
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
