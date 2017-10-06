import React from "react";
import { render } from "react-dom";

const MyTitle = ({ color, title }) => {
  return React.createElement("div", null, React.createElement("h1", { style: { color: color } }, title));
};

const MyFirstComponent = () => {
  return React.createElement(
    "div",
    { id: "my-first-component" },
    React.createElement(MyTitle, { title: "Game of Thrones Season 7", color: "Peru" }),
    React.createElement(MyTitle, { title: "House of Cards", color: "GreenYellow" }),
    React.createElement(MyTitle, { title: "Broad City", color: "YellowGreen" })
  );
};

render(React.createElement(MyFirstComponent), document.getElementById("app"));
