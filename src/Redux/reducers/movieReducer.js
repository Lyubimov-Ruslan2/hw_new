import { SUCCESS } from "../actions/types";
import { CLICK_EVENT } from "../actions/types";
import { MOVIE_DELETED } from "../actions/types";
import { EDIT_MOVIE_ACTION_TYPE } from "../actions/types";
const initialState = {
  movies: [],
  clickedMovie: null,
  editMovieState: null,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, movies: [...action.payload] };
    case CLICK_EVENT:
      return { ...state, clickedMovie: action.payload };
    case MOVIE_DELETED:
      return {
        ...state,
        movies: state.movies.filter((val) => val.id !== action.payload),
      };
    case EDIT_MOVIE_ACTION_TYPE:
      return { ...state, editMovieState: action.payload };
    default:
      return state;
  }
}

export default movieReducer;
