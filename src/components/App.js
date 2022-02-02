import React, { useState } from "react";
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

const App = (props) => {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const handleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  let movies = [
    {
      title: "Pulp Fiction",
      img: logo1,
      year: 2004,
      genre: "Action & Adventure",
      id: "asdaf",
    },
    {
      title: "Bohemian Rhapsody",
      img: logo2,
      year: 2003,
      genre: "Drama, Biography, Music",
      id: "asdaffs",
    },
    {
      title: "Kill Bill: Vol 2",
      img: logo3,
      year: 1994,
      genre: "Oscar winning Movie",
      id: "asdafwq",
    },
    {
      title: "Avengers: War of Infinity",
      img: logo4,
      year: 2004,
      genre: "Action & Adventure",
      id: "asdafuit",
    },
    {
      title: "Inception",
      img: logo5,
      year: 2003,
      genre: "Action & Adventure",
      id: "asdafcasd",
    },
    {
      title: "Reservoir dogs",
      img: logo6,
      year: 1994,
      genre: "Oscar winning Movie",
      id: "asdafyluyl",
    },
  ];

  return (
    <div className="container">
      {isDescriptionOpen ? <InfoMovie /> : <Header />}
      <ToggleGenre />
      <ErrorBoundary>
        <MovieContainer
          movies={movies}
          handler={handleDescription}
          isDescriptionOpen={isDescriptionOpen}
        />
      </ErrorBoundary>
      <Footer>netflixroulette</Footer>
    </div>
  );
};

export default App;
