import IconButton from "../icon-button";
import React from "react";
import { render } from "react-testing-library";
import { noop } from "lodash";
import { IoIosAdd } from "react-icons/io";

test("displays correctly", async () => {
  const { container } = render(
    <IconButton
      ariaLabel="The label"
      icon={IoIosAdd}
      type="button"
      onClick={noop}
    />
  );
  expect(container).toMatchSnapshot();
});
