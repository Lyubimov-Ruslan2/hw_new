import { SUCCESS } from "./types";
import { CLICK_EVENT } from "./types";

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

export { dataMovie, clickedMovie };
