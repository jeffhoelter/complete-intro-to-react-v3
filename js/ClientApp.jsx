// @flow

import React from "react";
import { render } from "react-dom";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'

const renderApp = () => {
  const appElement = document.getElementById("app");
  if (appElement == null) {
    throw new Error("no pad element");
  } else {
    render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
    appElement);
  }
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
