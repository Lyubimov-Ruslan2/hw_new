import React from "react";
import PropTypes from "prop-types";
import "./movie.styles.css";

const Movie = ({ img, title, year, genre, id }) => {
  return (
    <div id={id} className="movie-about">
      <img src={img} alt={`${(id = { id })}`} />
      <div className="about">
        <p>{title}</p>
        <button className="btn-about">{year}</button>
      </div>
      <p className="genre-about">{genre}</p>
    </div>
  );
};

Movie.defaultProps = {
  title: "Amazing movie!",
  year: 2000,
  genre: "Action & Adventure",
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Movie;
