import { dataMovie } from "../actions/action";

export function fetchMovie() {
  return (dispatch) => {
    return fetch("http://localhost:4000/movies?&limit=6")
      .then((response) => response.json())
      .then((val) => dispatch(dataMovie(val.data)));
  };
}

export function fetchMovieWithSorting(type) {
  return (dispatch) => {
    return fetch(`http://localhost:4000/movies?${type}`)
      .then((response) => response.json())
      .then((val) => dispatch(dataMovie(val.data)));
  };
}
