import React from "react";
import { render } from "react-testing-library";
import PackageDetail from "../package-detail";

function renderLoadedPackageDetail() {
  return render(
    <PackageDetail
      nodeId="formik"
      node={{
        id: "formik",
        description: "The description",
        link: "https://test.com"
      }}
      loading={false}
    />
  );
}

function renderLoadingPackageDetail() {
  return render(<PackageDetail nodeId="formik" node={null} loading={true} />);
}

test("displays everything in an article element", async () => {
  const { container } = renderLoadedPackageDetail();
  const article = container.firstElementChild;
  expect(article).not.toBeNull();
  expect(article!.tagName).toEqual("ARTICLE");
});

test("displays the heading", async () => {
  const { getByText } = renderLoadedPackageDetail();
  const heading = getByText(/formik/i);
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H1");
});

test("displays the description", async () => {
  const { getByText } = renderLoadedPackageDetail();
  expect(getByText(/The description/i)).toBeInTheDocument();
});

test("displays the link", async () => {
  const { getByText } = renderLoadedPackageDetail();
  const link = getByText(/View on npmjs/i);
  expect(link).toBeInTheDocument();
  expect(link.tagName).toEqual("A");
  expect(link.getAttribute("href")).toEqual("https://test.com");
});

test("displays the heading when loading", async () => {
  const { getByText } = renderLoadingPackageDetail();
  const heading = getByText(/formik/i);
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toEqual("H1");
});

test("does not display the description when loading", async () => {
  const { queryByText } = renderLoadingPackageDetail();
  expect(queryByText(/The description/i)).toBeNull();
});
