import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const ShowCard = ({ show }) => (
  <Wrapper>
    <ImageWrapper alt={`${show.title} Show Poster`} src={`/public/img/posters/${show.poster}`} />
    <div>
      <h3>{show.title}</h3>
      <h4>{show.year}</h4>
      <p>{show.description}</p>
      <p>{show.description2}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  show: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShowCard;
