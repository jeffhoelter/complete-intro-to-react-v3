// @flow

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const ImageWrapper = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: {
  title: string,
  imdbID: string,
  poster: string,
  year: string,
  description: string
}) => (
  <Wrapper>
    <ImageWrapper
      alt={`${props.title} Show Poster`}
      src={`/public/img/posters/${props.poster}`}
    />
    <div>
      <h3>{props.title}</h3>
      <h3>{props.imdbID}</h3>
      <h4>{props.year}</h4>
      <p>{props.description}</p>
      <h4>
        <Link to={`/details/${props.imdbID}`}>Movie Detail</Link>
      </h4>
    </div>
  </Wrapper>
);

export default ShowCard;
