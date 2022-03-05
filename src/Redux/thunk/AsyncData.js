import { dataMovie } from "../actions/action";

export function fetchMovie(type) {
  return (dispatch) => {
    return fetch(`http://localhost:4000/movies?${type}`)
      .then((response) => response.json())
      .then((val) => dispatch(dataMovie(val.data)));
  };
}

export function addMovie(obj) {
  const {
    addTitle: title,
    addReleaseDate: release_date,
    addUrl: poster_path,
    addRating: vote_average,
    addGenre: genres,
    addRuntime: runtime,
    addOverview: overview,
  } = obj;

  return (dispatch) => {
    return fetch("http://localhost:4000/movies", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title,
        release_date,
        poster_path,
        vote_average,
        genres,
        runtime,
        overview,
      }),
    })
      .then((response) => {
        if (response.ok === true) {
          {
            console.log(obj);
          }
          dispatch(fetchMovie("&limit=6"));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
}

export function deleteMovie(id) {
  return (dispatch) => {
    return fetch(`http://localhost:4000/movies/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok === true) {
          dispatch(fetchMovie("&limit=6"));
        } else {
          console.log("ERROR");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
