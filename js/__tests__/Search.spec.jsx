import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store";
import { setSearchTerm } from "../actionCreators";
import Search, { Unwrapped as UnwrappedSearch } from "../Search";
import ShowCard from "../ShowCard";
import preload from "../../data.json";

test("Search renders correctly", () => {
  const component = shallow(
    <UnwrappedSearch searchTerm="" shows={preload.shows} />
  );
  expect(component).toMatchSnapshot();
});

test("Search should render the correct amount of shows", () => {
  const component = shallow(
    <UnwrappedSearch searchTerm="" shows={preload.shows} />
  );
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("Should render correct amount of shows based on search terms", () => {
  const searchTerm = "black";
  store.dispatch(setSearchTerm(searchTerm));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search searchTerm={searchTerm} shows={preload.shows} />
      </MemoryRouter>
    </Provider>
  );
  const expectedShowCount = preload.shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchTerm.toUpperCase()) >= 0
  ).length;
  expect(component.find(".show-card").length).toEqual(expectedShowCount);
});
