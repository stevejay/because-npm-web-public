import React from "react";
import { cleanup, render } from "react-testing-library";
import Loading from "../loading";

afterEach(cleanup);

test("displays correctly when showing the loader at mount", async () => {
  const { container } = render(<Loading delayMs={0} />);
  expect(container).toMatchSnapshot();
});

test("displays correctly when waiting to show the loader", async () => {
  const { container } = render(<Loading delayMs={99999999} />);
  expect(container).toMatchSnapshot();
});
