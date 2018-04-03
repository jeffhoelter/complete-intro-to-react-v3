// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import type { RouterHistory } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";

class Landing extends Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory
  };

  goToSearch = (event: SyntheticKeyboardEvent) => {
    event.preventDefault();
    this.props.history.push("/search");
  };
  render() {
    return (
      <div className="landing">
        <h1>{this.props.searchTerm}</h1>
        <form onSubmit={this.goToSearch} />
        <input
          onChange={this.props.handleSearchTermChange}
          type="text"
          value={this.props.searchTerm}
          placeholder="Search"
        />
        <Link href="/search2" to="/search">
          or Browse All
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
