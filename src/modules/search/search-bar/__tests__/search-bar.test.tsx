import React from "react";
import { render } from "react-testing-library";
import SearchBar from "../search-bar";
import { noop } from "lodash";
import { MemoryRouter } from "react-router";
import { MockedProvider } from "react-apollo/test-utils";
import userEvent from "user-event";

function renderSearchBar(handleSearchTermChange = noop, handleSubmit = noop) {
  return render(
    <MockedProvider mocks={[]} addTypename={false}>
      <MemoryRouter>
        <SearchBar
          searchTerm="some term"
          onSearchTermChange={handleSearchTermChange}
          onSubmit={handleSubmit}
        />
      </MemoryRouter>
    </MockedProvider>
  );
}

test("renders a form element", async () => {
  const { getByRole } = renderSearchBar();
  expect(getByRole("search")).toBeInTheDocument();
});

test("renders a submit search button", async () => {
  const { getByLabelText } = renderSearchBar();
  const submitButton = getByLabelText(/Submit search/i);
  expect(submitButton).toBeInTheDocument();
  expect(submitButton.getAttribute("type")).toEqual("submit");
});

test("renders a search term input", async () => {
  const { getByPlaceholderText } = renderSearchBar();
  expect(
    getByPlaceholderText(/Search for an npm package/i)
  ).toBeInTheDocument();
});

test("submits the form when the submit button is clicked", async () => {
  let submitInvoked = false;
  const { getByLabelText, getByRole } = renderSearchBar(noop, noop);

  const form = getByRole("search");
  form.addEventListener("submit", event => {
    event.preventDefault();
    submitInvoked = true;
  });

  const submitButton = getByLabelText(/Submit search/i);
  userEvent.click(submitButton);
  expect(submitInvoked).toBeTruthy();
});
