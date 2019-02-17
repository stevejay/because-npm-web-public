import Footer from "../footer";
import React from "react";
import { render } from "react-testing-library";
import { MemoryRouter } from "react-router";

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
}

test("displays the copyright", async () => {
  const { getByText } = renderFooter();
  expect(
    getByText("\u00A9 2018 Middle Engine Software Ltd")
  ).toBeInTheDocument();
});

test("displays the terms link", async () => {
  const { getByText } = renderFooter();
  const link = getByText(/Terms/i);
  expect(link.tagName).toEqual("A");
  expect(link.getAttribute("href")).toEqual("/terms");
});

test("displays the privacy link", async () => {
  const { getByText } = renderFooter();
  const link = getByText(/Privacy & Cookies/i);
  expect(link.tagName).toEqual("A");
  expect(link.getAttribute("href")).toEqual("/privacy");
});

test("displays the credits link", async () => {
  const { getByText } = renderFooter();
  const link = getByText(/Credits/i);
  expect(link.tagName).toEqual("A");
  expect(link.getAttribute("href")).toEqual("/credits");
});
