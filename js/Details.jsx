// @flow

import React, { Component } from "react";
import Header from "./Header";
import ShowCard from "./ShowCard";

type Props = {
  show: Show
};

class Details extends Component<Props> {
  render() {
    const { title, description, year, poster, trailer } = this.props.show;

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>{year}</h2>
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https:/3/www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
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
