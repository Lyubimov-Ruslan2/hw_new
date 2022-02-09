import React from "react";
import "./ToggleGenre.styles.css";

function ToggleGenre(props) {
  return (
    <div className="flex-row">
      <nav className="Navigator">
        <a className="Navigator__link" href="#">
          All
        </a>
        <a className="Navigator__link" href="#">
          Documentary
        </a>
        <a className="Navigator__link" href="#">
          Comedy
        </a>
        <a className="Navigator__link" href="#">
          Horror
        </a>
        <a className="Navigator__link" href="#">
          Crime
        </a>
      </nav>
      <div className="Sorting">
        <p className="Sorting-items">Sort by</p>
        <p className="Sorting-items button" onClick={props.handler}>
          Release date
        </p>
        <p className="Sorting-items button" onClick={props.titleHandler}>
          Title
        </p>
      </div>
    </div>
  );
}

export default ToggleGenre;
