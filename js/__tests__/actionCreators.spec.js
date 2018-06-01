// @flow

import moxios from "moxios";
import { setSearchTerm, addApiData, getApiDetails } from "../actionCreators";

const strangerThings = {
  title: "Billions",
  year: "2016–",
  description:
    'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
  poster: "b.jpg",
  imdbID: "tt4270492",
  trailer: "_raEUMLL-ZI",
  rating: "4.5"
};

test("should return a valid search object", () => {
  expect(setSearchTerm("New York")).toMatchSnapshot();
});

test("should return a valid API data object", () => {
  expect(addApiData(strangerThings)).toMatchSnapshot();
});

test("should successfully getAPIDetails", (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getApiDetails(strangerThings.imdbID)(dispatchMock); // call the redux thunk
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: strangerThings }).then(() => {
        expect(request.url).toEqual(`http://localhost:3000/${strangerThings.imdbID}`);
        expect(dispatchMock).toBeCalledWith(addApiData(strangerThings));
        done();
      });
    });
  });
});
