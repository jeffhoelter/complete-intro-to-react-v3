// @flow

import React, { Component } from "react";
import ShowCard from "./ShowCard";

type Props = {
  shows: Array<ShowCard>
};

type State = {
  searchTerm: ""
};

class Search extends Component<Props, State> {
  handleSearchTermChange = (
    event: SyntheticKeyboardEvent<HTMLInputElement>
  ) => {
    this.setState({
      searchTerm: (event.target: window.HTMLInputElement).value
    });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="test"
            placeholder="Search"
          />
        </header>
        <div>
          {this.props.shows
            .filter(
              show =>
                // $FlowFixMe
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            // $FlowFixMe
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
