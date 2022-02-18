import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./movie.styles.css";
import editBtn from "../../img/edit.svg";
import DeleteMovie from "../PopUps/DeleteMovie";
import EditMovie from "../PopUps/EditMovie";
import "../Header/infoMovie";
import ListOfMoviesContext from "../../context";
const Movie = ({ id, title, poster_path, genres, release_date }) => {
  const [isEditMovieOpen, setEditMovieOpen] = useState(false);
  const [isDeleteMovieOpen, setDeleteMovieOpen] = useState(false);
  const [isIconOpen, setIconOpen] = useState(false);
  const { setDescriptionOpen, setMovieId } = useContext(ListOfMoviesContext);
  const handleMovieEdit = () => {
    setEditMovieOpen(!isEditMovieOpen);
  };

  const handleMovieDelete = () => {
    setDeleteMovieOpen(!isDeleteMovieOpen);
  };

  const handleMovieIcon = () => {
    setIconOpen(!isIconOpen);
  };

  useEffect(() => {
    if (isEditMovieOpen || isDeleteMovieOpen) {
      setIconOpen(false);
    }
  }, [isEditMovieOpen, isIconOpen, isDeleteMovieOpen]);

  const handleChangeDescription = () => {
    setMovieId(id);
    setDescriptionOpen(true);
  };

  return (
    <div id={id} className="movie-about" onClick={handleChangeDescription}>
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
      <EditMovie
        trigger={isEditMovieOpen}
        handler={handleMovieEdit}
        title={title}
      />
      <DeleteMovie trigger={isDeleteMovieOpen} handler={handleMovieDelete} />
    </div>
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

export default Movie;
