import { SUCCESS } from "../actions/types";
import { CLICK_EVENT } from "../actions/types";

const initialState = {
  movies: [],
  clickedMovie: null,
  deleteClickMovie: null,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, movies: [...action.payload] };
    case CLICK_EVENT:
      return { ...state, clickedMovie: action.payload };

    default:
      return state;
  }
}

export default movieReducer;
