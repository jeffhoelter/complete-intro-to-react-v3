// @flow

import React, { Component } from "react";
import Header from "./Header";

class Details extends Component {
  state = {
    apiData: { rating: "" }
  };
  componentDidMount() {
    console.log(this.props);
  }
  props: {
    show: Show
  };
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;
    if (this.state.apiData.rating) {
      ratingComponent = <h3>{this.state.apiData.rating}</h3>;
    } else {
      ratingComponent = <h3>Loading!</h3>;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

export default Details;
