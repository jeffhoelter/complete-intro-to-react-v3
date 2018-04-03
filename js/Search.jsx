// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import ShowCard from "./ShowCard";

class Search extends Component {
  props: {
    shows: Array<Show>,
    searchTerm: string
  };
  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
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
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

// const mapDispatchToProps = (dispatch: Function) => ({
//   handleSearchTermChange(event) {
//     dispatch(setSearchTerm(event.target.value));
//   }
// });

export default connect(mapStateToProps)(Search);
