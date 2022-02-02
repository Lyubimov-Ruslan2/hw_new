import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./movie.styles.css";
import editBtn from "../../img/edit.svg";
import DeleteMovie from "../PopUps/DeleteMovie";
import EditMovie from "../PopUps/EditMovie";
import "../Header/infoMovie";
import InfoMovie from "../Header/infoMovie";

const Movie = ({ img, title, year, genre, id, handler, isDescriptionOpen }) => {
  const [isEditMovieOpen, setEditMovieOpen] = useState(false);
  const [isDeleteMovieOpen, setDeleteMovieOpen] = useState(false);
  const [isIconOpen, setIconOpen] = useState(false);
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

  return (
    <div id={id} onClick={handler} className="movie-about">
      {isDescriptionOpen && <InfoMovie title={title} />}
      <img className="img-edit" src={img} />
      <div className="about">
        <p>{title}</p>
        <button className="btn-about">{year}</button>
      </div>
      <p className="genre-about">{genre}</p>
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
  id: PropTypes.string.isRequired,
};

export default Movie;
