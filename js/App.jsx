// @flow

import React from "react";
import { Switch, Route } from "react-router-dom";
import type { Match } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AsyncRoute from "./AsyncRoute";
import Search from "./Search";
import Details from "./Details";
import preload from "../data.json";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={props => 
            <AsyncRoute props={props} loadingPromise={import('./Landing')} />
           } />
          <Route
            path="/search"
            component={props => <Search shows={preload.shows} {...props} />}
          />
          <Route
            path="/details/:id"
            component={(props: { match: Match }) => {
              const selectedShow = preload.shows.find(
                show => props.match.params.id === show.imdbID
              );
              return <Details show={selectedShow} {...props} />;
            }}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
);

export default App;
