import React from "react";
import "./MovieContainer.styles.css";
import Movie from "../movie/movie.component";
import { connect } from "react-redux";
const MovieContainer = (props) => {
  const { movies } = props;

  return (
    <>
      <p className="found">{movies.length} movies found</p>

      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
});

export default connect(mapStateToProps, null)(MovieContainer);
