import React, { useState, useEffect } from "react";
import Header from "./Header/Header.component";
import Footer from "./footter/footer.component";
import ToggleGenre from "./Togglegenre/Togglegenre";
import MovieContainer from "./MovieContainer/MovieContainer.component";
import ErrorBoundary from "./ErrorBound/ErrorBoundary.component";
import AddMovie from "./PopUps/AddMovie";
import EditMovie from "./PopUps/EditMovie";
import DeleteMovie from "./PopUps/DeleteMovie";
import InfoMovie from "./Header/infoMovie";
import logo1 from "../img/pulpfiction.png";
import logo2 from "../img/Bogem.png";
import logo3 from "../img/killbill.png";
import logo4 from "../img/Avengers.png";
import logo5 from "../img/Inception.png";
import logo6 from "../img/Dogs.png";
import "../index.css";
import { useSortedObject, useSortedByTitle } from "./hooks/MyCustomHooks";
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
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [sortedMovieByYear, setSortedMovieByYear] = useState(true);
  const [sortedMovieByTitle, setSortedMovieByTitle] = useState(false);
  const [movieList, setMovieList] = useState(movies);

  const handleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  const handleSortedByYear = () => {
    setSortedMovieByYear(!sortedMovieByYear);
  };
  const handleSortedByTitle = () => {
    setSortedMovieByTitle(!sortedMovieByTitle);
  };

  useEffect(() => {
    console.log("sortedMovieByYear", sortedMovieByYear);
    if (sortedMovieByYear) {
      setMovieList(useSortedObject(movies));
    }
  }, [sortedMovieByYear, movies]);

  useEffect(() => {
    console.log("sortedMovieByTitle", sortedMovieByTitle);
    if (sortedMovieByTitle) {
      setMovieList(useSortedByTitle(movies));
    }
  }, [sortedMovieByTitle, movies]);

  const selectedMovie = movies.filter((movie) => movie.id === movieId);
  return (
    <div className="container">
      {isDescriptionOpen ? (
        selectedMovie.map(({ id, ...otherMovieInfo }) => (
          <InfoMovie key={id} {...otherMovieInfo} handler={handleDescription} />
        ))
      ) : (
        <Header />
      )}

      <ToggleGenre
        handler={handleSortedByYear}
        titleHandler={handleSortedByTitle}
        setSortedMovieByYear={setSortedMovieByYear}
        setSortedMovieByTitle={setSortedMovieByTitle}
      />
      <ErrorBoundary>
        <MovieContainer
          movies={movieList}
          handler={handleDescription}
          isDescriptionOpen={isDescriptionOpen}
          setMovieId={setMovieId}
          setDescriptionOpen={setDescriptionOpen}
          sortedMovieByYear={sortedMovieByYear}
        />
      </ErrorBoundary>
      <Footer>netflixroulette</Footer>
    </div>
  );
};

export default App;
