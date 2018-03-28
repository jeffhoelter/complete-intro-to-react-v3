// @flow

import React from "react";
import { render } from "react-dom";
import App from "./App";

const renderApp = () => {
  const appElement = document.getElementById("app");
  if (appElement == null) {
    throw new Error("no pad element");
  } else {
    render(<App />, appElement);
  }
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
