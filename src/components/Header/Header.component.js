import React from "react";
import "./Header.styles.css";
import headLogo from "./img/92a81bbe79a924292111ca43f3a39e8f.png";
import SearchBar from "../SearchBar/searchBar";

const Header = (props) => {
  const styledCom = {
    backgroundImage: `linear-gradient(rgba(41, 49, 51, 0.7), rgba(0, 0, 0, 0.8)), url(${headLogo})`,
  };
  return (
    <header>
      <div style={styledCom} class="image">
        <div className="flex-items">
          <p className="logo">netflixroulette</p>
          <button className="btn">+ add movie</button>
        </div>
        <h1>FIND YOUR MOViE</h1>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
