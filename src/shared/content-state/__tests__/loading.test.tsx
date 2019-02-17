import React from "react";
import { render } from "react-testing-library";
import Loading from "../loading";

test("displays correctly when showing the loader straightaway", async () => {
  const { getByRole, container } = render(<Loading delayMs={0} />);
  expect(container.getElementsByTagName("section").length).toEqual(1);
  const svg = getByRole("status");
  expect(svg.tagName).toEqual("svg");
  expect(svg.getAttribute("aria-live")).toEqual("polite");
  expect(svg.getAttribute("aria-label")).toMatch(
    /Loading content from the server/i
  );
});

test("displays correctly when waiting to show the loader", async () => {
  const { queryByRole, container } = render(<Loading delayMs={99999999} />);
  expect(container.getElementsByTagName("section").length).toEqual(1);
  const svg = queryByRole("status");
  expect(svg).toEqual(null);
});
