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
import "../index.css";

const App = (props) => {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const handleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };
  return (
    <div className="container">
      {isDescriptionOpen ? <InfoMovie /> : <Header />}
      <ToggleGenre />
      <ErrorBoundary>
        <MovieContainer handler={handleDescription} />
      </ErrorBoundary>
      <Footer>netflixroulette</Footer>
    </div>
  );
};

export default App;
