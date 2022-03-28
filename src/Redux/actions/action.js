import { SUCCESS } from "./types";
import { CLICK_EVENT } from "./types";
import { MOVIE_DELETED } from "./types";
import { EDIT_MOVIE_ACTION_TYPE } from "./types";

const dataMovie = (movie) => (dispatch) => {
  dispatch({
    type: SUCCESS,
    payload: movie,
  });
};

const clickedMovie = (focusMovie) => (dispatch) => {
  dispatch({
    type: CLICK_EVENT,
    payload: focusMovie,
  });
};

const deletedMovie = (movieId) => (dispatch) => {
  dispatch({
    type: MOVIE_DELETED,
    payload: movieId,
  });
};

const editMovieByIdAction = (movie) => (dispatch) => {
  dispatch({
    type: EDIT_MOVIE_ACTION_TYPE,
    payload: movie,
  });
};

export { dataMovie, clickedMovie, deletedMovie, editMovieByIdAction };
