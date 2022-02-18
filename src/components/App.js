import React, { useState, useEffect } from "react";
import Header from "./Header/Header.component";
import Footer from "./footter/footer.component";
import ToggleGenre from "./Togglegenre/Togglegenre";
import MovieContainer from "./MovieContainer/MovieContainer.component";
import ErrorBoundary from "./ErrorBound/ErrorBoundary.component";
import InfoMovie from "./Header/infoMovie";
import "../index.css";
import ListOfMoviesContext from "../context";
import { connect } from "react-redux";
import { fetchMovie } from "../Redux/thunk/AsyncData";

const App = (props) => {
  const { movies1, movieData } = props;
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [movieId, setMovieId] = useState(null);

  const handleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  useEffect(() => {
    movieData();
  }, []);

  const selectedMovie = movies1.filter((movie) => movie.id === movieId);

  return (
    <div className="container">
      <ListOfMoviesContext.Provider
        value={{
          handleDescription,
          setDescriptionOpen,
          setMovieId,
          selectedMovie,
        }}
      >
        {isDescriptionOpen ? (
          <InfoMovie handler={handleDescription} />
        ) : (
          <Header />
        )}
        <ToggleGenre />
        <ErrorBoundary>
          <MovieContainer />
        </ErrorBoundary>
        <Footer>netflixroulette</Footer>
      </ListOfMoviesContext.Provider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies1: state.movieReducer.movies,
});

const mapDispatchToProps = (dispatch) => ({
  movieData: () => dispatch(fetchMovie()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
