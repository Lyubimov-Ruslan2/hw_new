import React, { useEffect, useContext } from "react";
import "./MovieContainer.styles.css";
import Movie from "../movie/movie.component";
import ListOfMoviesContext from "../../context";
import { connect } from "react-redux";
const MovieContainer = (props) => {
  const { movies } = props;
  const { sortedMovies } = useContext(ListOfMoviesContext);

  return (
    <>
      <p className="found">{movies.length} movies found</p>

      <div className="movie-list">
        {movies.map(({ id, ...otherProps }) => (
          <Movie key={id} {...otherProps} />
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
});

export default connect(mapStateToProps, null)(MovieContainer);
