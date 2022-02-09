import React from "react";
import searchButton from "./img/SearchButton.svg";
import pulpf from "../../img/pulpfiction.png";
import "./infoMovie.styles.css";

const InfoMovie = ({ id, title, img, year, genre, handler, time }) => {
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
      <div id={id} className="description-movie">
        <div className="icons">
          <span>netflixroulette</span>
          <img src={searchButton} onClick={handler} alt="search" />
        </div>
        <div className="description-info">
          <img src={img} alt="pulp" />
          <div className="description-text">
            <h1>{title}</h1>
            <span className="circle-rating">8.9</span>
            <p>{genre}</p>
            <div className="span-group">
              <span>{year}</span>
              <span>{TimerConverter(time)}</span>
            </div>
            <p>
              Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John
              Travolta) are two hit men who are out to retrieve a suitcase
              stolen from their employer, mob boss Marsellus Wallace (Ving
              Rhames). Wallace has also asked Vincent to take his wife Mia (Uma
              Thurman) out a few days later when Wallace himself will be out of
              town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid
              by Wallace to lose his fight. The lives of these seemingly
              unrelated people are woven together comprising of a series of
              funny, bizarre and uncalled-for incidents.—Soumitra s
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoMovie;
