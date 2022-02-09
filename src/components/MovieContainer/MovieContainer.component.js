import React, { useEffect } from "react";
import "./MovieContainer.styles.css";
import Movie from "../movie/movie.component";

const MovieContainer = (props) => {
  return (
    <>
      <p className="found">{props.movies.length} movies found</p>

      <div className="movie-list">
        {props.movies.map(({ title, img, year, genre, id }) => (
          <Movie
            title={title}
            img={img}
            year={year}
            genre={genre}
            key={id}
            id={id}
            handler={props.handler}
            isDescriptionOpen={props.isDescriptionOpen}
            setMovieId={props.setMovieId}
            setDescriptionOpen={props.setDescriptionOpen}
          />
        ))}
      </div>
    </>
  );
};
export default MovieContainer;
