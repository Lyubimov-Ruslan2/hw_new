import React, { Component } from "react";
import Header from "./Header/Header.component";
import Footer from "./footter/footer.component";
import ToggleGenre from "./Togglegenre/Togglegenre";
import MovieContainer from "./MovieContainer/MovieContainer.component";
import ErrorBoundary from "./ErrorBound/ErrorBoundary.component";
import AddMovie from "./PopUps/AddMovie";
import EditMovie from "./PopUps/EditMovie";
import DeleteMovie from "./PopUps/DeleteMovie";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <ToggleGenre />
        <ErrorBoundary>
          <MovieContainer />
        </ErrorBoundary>
        <Footer>netflixroulette</Footer>
      </div>
    );
  }
}

export default App;
