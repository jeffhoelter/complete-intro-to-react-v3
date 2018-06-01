// @flow

import { setSearchTerm, addApiData } from "../actionCreators";

test("should return a valid search object", () => {
  expect(setSearchTerm("New York")).toMatchSnapshot();
});

test("should return a valid API data object", () => {
  expect(
    addApiData({
      title: "Billions",
      year: "2016–",
      description:
        'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
      poster: "b.jpg",
      imdbID: "tt4270492",
      trailer: "_raEUMLL-ZI",
      rating: "4.5"
    })
  ).toMatchSnapshot();
});
