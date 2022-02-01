import React, { useState } from "react";
import "./SearchBar.styles.css";

const SearchBar = (props) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(searchField);
  };

  return (
    <div className="search-area">
      <h1>Find your movie</h1>
      <div>
        <input
          type="search"
          placeholder="What do you want to watch?"
          className="inp"
          onChange={handleChange}
        />
        <button className="btn2">
          <span className="search-text">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
