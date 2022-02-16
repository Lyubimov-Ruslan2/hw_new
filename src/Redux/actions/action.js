import { SUCCESS } from "./types";

const dataMovie = (movie) => (dispatch) => {
  dispatch({
    type: SUCCESS,
    payload: movie,
  });
};

export { dataMovie };
