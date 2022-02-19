import React from "react";
import "./ToggleGenre.styles.css";
import { connect } from "react-redux";
import { fetchMovie } from "../../Redux/thunk/AsyncData";

function ToggleGenre(props) {
  const { sortedByAll, sortedByGenre, sortedByDate, sortedByRating } = props;

  return (
    <div className="flex-row">
      <div className="Navigator">
        <p className="Navigator__link" onClick={() => sortedByAll()}>
          All
        </p>
        <p className="Navigator__link" onClick={() => sortedByGenre("Action")}>
          Action
        </p>
        <p className="Navigator__link" onClick={() => sortedByGenre("Comedy")}>
          Comedy
        </p>
        <p className="Navigator__link" onClick={() => sortedByGenre("Horror")}>
          Horror
        </p>
        <p className="Navigator__link" onClick={() => sortedByGenre("Crime")}>
          Crime
        </p>
      </div>
      <div className="Sorting">
        <p className="Sorting-items">Sort by</p>
        <p className="Sorting-items button" onClick={() => sortedByDate()}>
          Release date
        </p>
        <p className="Sorting-items button" onClick={() => sortedByRating()}>
          Rating
        </p>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  sortedByDate: () =>
    dispatch(fetchMovie("sortBy=release_date&sortOrder=desc&limit=6")),
  sortedByRating: () =>
    dispatch(fetchMovie("sortBy=vote_average&sortOrder=desc&limit=6")),

  sortedByGenre: (genre) =>
    dispatch(fetchMovie(`sortBy=genres&filter=${genre}&limit=6`)),

  sortedByAll: () => dispatch(fetchMovie(`limit=51`)),
});
export default connect(null, mapDispatchToProps)(ToggleGenre);
