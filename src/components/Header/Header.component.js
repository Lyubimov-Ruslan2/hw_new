import React from "react";
import "./Header.styles.css";
import headLogo from "./img/92a81bbe79a924292111ca43f3a39e8f.png";
import SearchBar from "../SearchBar/searchBar";
import AddMovie from "../PopUps/AddMovie";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddMovieOpen: false,
    };
  }

  handleMoviePOPUp = () => {
    this.setState({ isAddMovieOpen: !this.state.isAddMovieOpen });
  };

  render() {
    const styledCom = {
      backgroundImage: `linear-gradient(rgba(41, 49, 51, 0.7), rgba(0, 0, 0, 0.8)), url(${headLogo})`,
    };
    return (
      <header>
        <div style={styledCom} className="image">
          <div className="flex-items">
            <p className="logo">
              <span className="span-text">netflix</span>roulette
            </p>
            <button onClick={this.handleMoviePOPUp.bind(this)} className="btn">
              + add movie
            </button>
            <AddMovie
              trigger={this.state.isAddMovieOpen}
              handler={this.handleMoviePOPUp.bind(this)}
            />
          </div>
          <h1>FIND YOUR MOViE</h1>
          <SearchBar />
        </div>
      </header>
    );
  }
}

export default Header;
