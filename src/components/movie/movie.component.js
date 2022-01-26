import React from "react";
import PropTypes from "prop-types";
import "./movie.styles.css";
import editBtn from "../../img/edit.svg";

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { img, title, year, genre, id } = this.props;
    return (
      <div id={id} className="movie-about">
        <img src={img} />
        <div className="about">
          <p>{title}</p>
          <button className="btn-about">{year}</button>
        </div>
        <p className="genre-about">{genre}</p>
        <img className="edit" src={editBtn} alt="edit" />
      </div>
    );
  }
}

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
