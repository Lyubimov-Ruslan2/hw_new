import React, { Component } from "react";
import Header from "./Header/Header.component";
import Footer from "./footter/footer.component";
import ToggleGenre from "./Togglegenre/Togglegenre";
import MovieContainer from "./MovieContainer/MovieContainer.component";
import ErrorBoundary from "./ErrorBound/ErrorBoundary.component";
import AddMovie from "./addMoviePopUp/AddMovie";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ToggleGenre />
        <ErrorBoundary>
          <MovieContainer />
        </ErrorBoundary>
        <Footer>netflixroulette</Footer>
        <AddMovie />
      </div>
    );
  }
}

export default App;
