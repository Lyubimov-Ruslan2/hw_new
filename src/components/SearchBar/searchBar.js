import React from "react";
import "./SearchBar.styles.css";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };
  render() {
    return (
      <div className="search-area">
        <h1>Find your movie</h1>
        <input
          type="search"
          placeholder="What do you want to watch?"
          className="inp"
          onChange={this.handleChange}
        />
        <button className="btn2">
          <div className="search-text">Search</div>
        </button>
      </div>
    );
  }
}

export default SearchBar;
