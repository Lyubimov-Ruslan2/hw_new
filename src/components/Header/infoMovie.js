import React from "react";
import searchButton from "./img/SearchButton.svg";
import "./infoMovie.styles.css";
import { connect } from "react-redux";

const InfoMovie = ({ handler, movieClicked }) => {
  const TimerConverter = (str) => {
    const time = +str;
    const convert_hours = Math.floor(time / 60);
    const convert_min = time % 60;
    return `${String(convert_hours)}h ${
      convert_min === 0 ? "" : String(convert_min) + "min"
    }`;
  };
  return (
    <>
      <div id={movieClicked.id} className="description-movie">
        <div className="icons">
          <span>netflixroulette</span>
          <img src={searchButton} onClick={handler} alt="search" />
        </div>
        <div className="description-info">
          <img src={movieClicked.poster_path} alt="pulp" />
          <div className="description-text">
            <h1>{movieClicked.title}</h1>
            <span className="circle-rating">{movieClicked.vote_average}</span>
            <p>{movieClicked.genres.join(" / ")}</p>
            <div className="span-group">
              <span>{movieClicked.release_date.slice(0, 4)}</span>
              <span>{TimerConverter(movieClicked.runtime)}</span>
            </div>
            <p>{movieClicked.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movieClicked: state.movieReducer.clickedMovie,
});

export default connect(mapStateToProps, null)(InfoMovie);
