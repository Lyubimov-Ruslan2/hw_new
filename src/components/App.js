import React, { Component } from "react";
import Header from "./Header/Header.component";
import Footer from "./footter/footer.component";
import ToggleGenre from "./Togglegenre/Togglegenre";
import MovieContainer from "./MovieContainer/MovieContainer.component";
// New File,
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ToggleGenre />
        <MovieContainer />
        <Footer>netflixroulette</Footer>
      </div>
    );
  }
}

export default App;
