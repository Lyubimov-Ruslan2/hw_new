import { SUCCESS } from "../actions/types";
import { CLICK_EVENT } from "../actions/types";
import { MOVIE_DELETED } from "../actions/types";

const initialState = {
  movies: [],
  clickedMovie: null,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, movies: [...action.payload] };
    case CLICK_EVENT:
      return { ...state, clickedMovie: action.payload };
    case MOVIE_DELETED:
      // const state = [...state.movies];
      // const filteredState = ;
      // // return { movies: filteredState, clickedMovie: null };
      return {
        ...state,
        movies: state.movies.filter((val) => val.id === action.payload),
      };
    default:
      return state;
  }
}

export default movieReducer;
