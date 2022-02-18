import React, { useContext } from "react";
import searchButton from "./img/SearchButton.svg";
import "./infoMovie.styles.css";
import ListOfMoviesContext from "../../context";
const InfoMovie = ({ handler }) => {
  const { selectedMovie } = useContext(ListOfMoviesContext);
  const [myObj] = selectedMovie;

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
      <div id={myObj.id} className="description-movie">
        <div className="icons">
          <span>netflixroulette</span>
          <img src={searchButton} onClick={handler} alt="search" />
        </div>
        <div className="description-info">
          <img src={myObj.poster_path} alt="pulp" />
          <div className="description-text">
            <h1>{myObj.title}</h1>
            <span className="circle-rating">{myObj.vote_average}</span>
            <p>{myObj.genres.join(" / ")}</p>
            <div className="span-group">
              <span>{myObj.release_date.slice(0, 4)}</span>
              <span>{TimerConverter(myObj.runtime)}</span>
            </div>
            <p>{myObj.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoMovie;
