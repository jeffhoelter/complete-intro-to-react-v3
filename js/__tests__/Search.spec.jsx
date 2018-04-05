import React from "react";
import { shallow } from "enzyme";
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
  const component = shallow(
    <UnwrappedSearch searchTerm={searchTerm} shows={preload.shows} />
  );
  component.find("input").simulate("change", { target: { value: searchTerm } });
  const expectedShowCount = preload.shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchTerm.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(expectedShowCount);
});
