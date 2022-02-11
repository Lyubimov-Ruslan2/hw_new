import React, { useEffect, useContext } from "react";
import "./MovieContainer.styles.css";
import Movie from "../movie/movie.component";
import ListOfMoviesContext from "../../context";
const MovieContainer = (props) => {
  const { sortedMovies } = useContext(ListOfMoviesContext);

  return (
    <>
      <p className="found">{sortedMovies.length} movies found</p>

      <div className="movie-list">
        {sortedMovies.map(({ title, img, year, genre, id }) => (
          <Movie
            title={title}
            img={img}
            year={year}
            genre={genre}
            key={id}
            id={id}
          />
        ))}
      </div>
    </>
  );
};
export default MovieContainer;
