// @flow

import React from "react";
import { connect } from "react-redux";
import ShowCard from "./ShowCard";
import { setSearchTerm } from "./actionCreators";

const Search = (props: {
  shows: Array<Show>,
  searchTerm: string,
  handleSearchTermChange: Function
}) => (
  <div className="search">
    <header>
      <h1>svideo</h1>
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
      />
    </header>
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export const Unwrapped = Search;

export default connect(mapStateToProps, mapDispatchToProps)(Search);
