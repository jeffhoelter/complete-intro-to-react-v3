// @flow

import React, { Component } from "react";
import ShowCard from "./ShowCard";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  props: {
    shows: Array<ShowCard>
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent<T>) => {
    this.setState({ searchTerm: event.target.value });
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
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
