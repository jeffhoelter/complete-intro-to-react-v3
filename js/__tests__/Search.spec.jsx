import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";
import ShowCard from "../ShowCard";
import preload from "../../data.json";

test("Search renders correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test("Search should render the correct amount of shows", () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("Should render correct amount of shows based on search terms", () => {
  const searchTerm = "black";
  const component = shallow(<Search />);
  component.find("input").simulate("change", { target: { value: searchTerm } });
  const expectedShowCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0,
  ).length;
  expect(component.find(ShowCard).length).toEqual(expectedShowCount);
});
