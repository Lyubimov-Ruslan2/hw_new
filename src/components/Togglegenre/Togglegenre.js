import React from "react";
import "./ToggleGenre.styles.css";

function ToggleGenre({ setSortBy }) {
  //   const handlerYear = () => {
  //     props.setSortedMovieByYear(false);
  //     props.setSortedMovieByTitle(true);
  //   };
  //   const handlerTitle = () => {
  //     props.setSortedMovieByYear(true);
  //     props.setSortedMovieByTitle(false);
  //   };

  // const handlerYear = () => {
  //   setSortedMovieByYear(false);
  //   setSortedMovieByTitle(true);
  // };
  // const handlerTitle = () => {
  //   setSortedMovieByYear(true);
  //   setSortedMovieByTitle(false);
  // };
  return (
    <div className="flex-row">
      <nav className="Navigator">
        <a className="Navigator__link" href="#">
          All
        </a>
        <a className="Navigator__link" href="#">
          Documentary
        </a>
        <a className="Navigator__link" href="#">
          Comedy
        </a>
        <a className="Navigator__link" href="#">
          Horror
        </a>
        <a className="Navigator__link" href="#">
          Crime
        </a>
      </nav>
      <div className="Sorting">
        <p className="Sorting-items">Sort by</p>
        <p
          className="Sorting-items button"
          onClick={() => setSortBy("Release_Date")}
        >
          Release date
        </p>
        <p className="Sorting-items button" onClick={() => setSortBy("Title")}>
          Title
        </p>
      </div>
    </div>
  );
}

export default ToggleGenre;
