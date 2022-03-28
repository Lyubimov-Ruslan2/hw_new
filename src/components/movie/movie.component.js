import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./movie.styles.css";
import editBtn from "../../img/edit.svg";
import DeleteMovie from "../PopUps/DeleteMovie";
import EditMovie from "../PopUps/EditMovie";
import "../Header/infoMovie";
import ListOfMoviesContext from "../../context";
import { clickedMovie } from "../../Redux/actions/action";
import { connect } from "react-redux";
import { editMovieByIdAction } from "../../Redux/actions/action";
const Movie = ({
  id,
  title,
  poster_path,
  genres,
  release_date,
  vote_average,
  runtime,
  overview,
  movieDispatch,
  editMovieDispatch,
}) => {
  const [isEditMovieOpen, setEditMovieOpen] = useState(false);
  const [isDeleteMovieOpen, setDeleteMovieOpen] = useState(false);
  const [isIconOpen, setIconOpen] = useState(false);
  const { setDescriptionOpen, setMovieId } = useContext(ListOfMoviesContext);
  const handleMovieEdit = (e) => {
    // e.stopPropagation();
    setEditMovieOpen(!isEditMovieOpen);
  };
  const handleMovieDelete = (e) => {
    setDeleteMovieOpen(!isDeleteMovieOpen);
  };
  const handleMovieIcon = (e) => {
    e.stopPropagation();
    setIconOpen(!isIconOpen);
  };
  useEffect(() => {
    if (isEditMovieOpen || isDeleteMovieOpen) {
      setIconOpen(false);
    }
  }, [isEditMovieOpen, isIconOpen, isDeleteMovieOpen]);
  const handleChangeDescription = (e) => {
    movieDispatch({
      id,
      title,
      poster_path,
      genres,
      release_date,
      overview,
      vote_average,
      runtime,
    });
    editMovieDispatch({
      id,
      title,
      poster_path,
      genres,
      release_date,
      overview,
      vote_average,
      runtime,
    });

    setDescriptionOpen(true);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div
        id={id}
        className="movie-about"
        onClick={(e) => handleChangeDescription(e)}
      >
        <img className="img-edit" src={poster_path} />
        <div className="about">
          <p>{title}</p>
          <button className="btn-about">{release_date.slice(0, 4)}</button>
        </div>
        <p className="genre-about">{genres.join(" / ")}</p>
        <img
          onClick={handleMovieIcon}
          className="edit"
          src={editBtn}
          alt="edit"
        />
        {isIconOpen && (
          <div className="pops-menu">
            <button onClick={handleMovieIcon} className="cl">
              x
            </button>
            <p className="first" onClick={handleMovieEdit}>
              Edit
            </p>
            <p onClick={handleMovieDelete} className="last">
              Delete
            </p>
          </div>
        )}
      </div>
      {isEditMovieOpen && (
        <EditMovie
          trigger={isEditMovieOpen}
          handler={handleMovieEdit}
          title={title}
        />
      )}
      {isDeleteMovieOpen && (
        <DeleteMovie
          id={id}
          trigger={isDeleteMovieOpen}
          handler={handleMovieDelete}
        />
      )}
    </>
  );
};
Movie.defaultProps = {
  title: "Amazing movie!",
  year: 2000,
  genre: "Action & Adventure",
};
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  movieDispatch: (movieData) => dispatch(clickedMovie(movieData)),
  editMovieDispatch: (data) => dispatch(editMovieByIdAction(data)),
});
export default connect(null, mapDispatchToProps)(Movie);
