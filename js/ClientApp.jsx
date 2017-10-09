import React from "react";
import { render } from "react-dom";

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>svideo</h1>
      <input type="text" placeholder="Search" />
      <a href="https://google.com">or Browse All1234</a>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
