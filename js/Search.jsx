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
  handleSearchTermChange = (event: SyntheticKeyboardEvent) => {
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
