import { SUCCESS } from "../actions/types";

const initialState = {
  movies: [],
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, movies: [...action.payload] };
    default:
      return state;
  }
}

export default movieReducer;
