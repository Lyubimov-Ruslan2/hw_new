import { dataMovie } from "../actions/action";

export function fetchMovie(type) {
  return (dispatch) => {
    return fetch(`http://localhost:4000/movies?${type}`)
      .then((response) => response.json())
      .then((val) => dispatch(dataMovie(val.data)));
  };
}
