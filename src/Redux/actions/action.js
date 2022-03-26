import { SUCCESS } from "./types";
import { CLICK_EVENT } from "./types";
import { MOVIE_DELETED } from "./types";

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

export { dataMovie, clickedMovie, deletedMovie };
