import React, { useState, useEffect } from "react";
import Header from "./Header/Header.component";
import Footer from "./footter/footer.component";
import ToggleGenre from "./Togglegenre/Togglegenre";
import MovieContainer from "./MovieContainer/MovieContainer.component";
import ErrorBoundary from "./ErrorBound/ErrorBoundary.component";
import InfoMovie from "./Header/infoMovie";
import logo1 from "../img/pulpfiction.png";
import logo2 from "../img/Bogem.png";
import logo3 from "../img/killbill.png";
import logo4 from "../img/Avengers.png";
import logo5 from "../img/Inception.png";
import logo6 from "../img/Dogs.png";
import "../index.css";
import useMyCustomHooks from "./hooks/useSortMovies";
import ListOfMoviesContext from "../context";
import { connect } from "react-redux";
let movies = [
  {
    title: "Pulp Fiction",
    img: logo1,
    year: 2004,
    genre: "Action & Adventure",
    time: "140",
    id: "asdaf",
  },
  {
    title: "Bohemian Rhapsody",
    img: logo2,
    year: 2003,
    genre: "Drama, Biography, Music",
    time: "130",
    id: "asdaffs",
  },
  {
    title: "Kill Bill: Vol 2",
    img: logo3,
    year: 1994,
    genre: "Oscar winning Movie",
    time: "120",
    id: "asdafwq",
  },
  {
    title: "Avengers: War of Infinity",
    img: logo4,
    year: 2004,
    genre: "Action & Adventure",
    time: "157",
    id: "asdafuit",
  },
  {
    title: "Inception",
    img: logo5,
    year: 2003,
    genre: "Action & Adventure",
    time: "136",
    id: "asdafcasd",
  },
  {
    title: "Reservoir dogs",
    img: logo6,
    year: 1994,
    genre: "Oscar winning Movie",
    time: "139",
    id: "asdafyluyl",
  },
];
const App = (props) => {
  const { movies123 } = props;
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [sortBy, setSortBy] = useState("noSort");

  const handleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };
  const sortedMovies = useMyCustomHooks([...movies], sortBy);

  const selectedMovie = movies.filter((movie) => movie.id === movieId);
  return (
    <div className="container">
      <ListOfMoviesContext.Provider
        value={{
          sortedMovies,
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
        <ToggleGenre setSortBy={setSortBy} />
        <ErrorBoundary>
          <MovieContainer />
        </ErrorBoundary>
        <Footer>netflixroulette</Footer>
      </ListOfMoviesContext.Provider>
      {console.log(movies123)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies123: state.movieReducer.movies,
});

export default connect(mapStateToProps, null)(App);

// export default connect(mapStateToProps, mapDispatchToProps)(App);
