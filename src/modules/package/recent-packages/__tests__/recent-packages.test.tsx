import React from "react";
import { render } from "react-testing-library";
import RecentPackages from "../recent-packages";
import { noop } from "lodash";
import { MemoryRouter } from "react-router";

function renderRecentPackages(packages: string[]) {
  return render(
    <MemoryRouter>
      <RecentPackages packages={packages} onLinkClick={noop} />
    </MemoryRouter>
  );
}

test("displays everything in a section", async () => {
  const { container } = renderRecentPackages([
    "should-not-appear",
    "formik",
    "react"
  ]);
  const section = container.firstElementChild;
  expect(section).not.toBeNull();
  expect(section!.tagName).toEqual("SECTION");
});

test("displays a heading", async () => {
  const { getByText } = renderRecentPackages([
    "should-not-appear",
    "formik",
    "react"
  ]);
  const heading = getByText(/Recently Viewed/i);
  expect(heading.tagName).toEqual("H2");
});

test("displays a suitable message when there are no recent packages", async () => {
  const { getByText } = renderRecentPackages(["should-not-appear"]);
  expect(getByText(/No recent packages/i)).toBeInTheDocument();
});

test("does not display the no packages message when there are some", async () => {
  const { queryByText } = renderRecentPackages(["should-not-appear", "formik"]);
  expect(queryByText(/No recent packages/i)).toBeNull();
});

test("displays links to the recent packages", async () => {
  const { getByText } = renderRecentPackages([
    "should-not-appear",
    "formik",
    "react"
  ]);

  let link = getByText(/formik/i);
  expect(link.tagName).toEqual("A");
  expect(link.getAttribute("href")).toEqual("/package/formik");

  link = getByText(/react/i);
  expect(link.tagName).toEqual("A");
  expect(link.getAttribute("href")).toEqual("/package/react");
});
