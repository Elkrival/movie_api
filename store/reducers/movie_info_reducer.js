import { MOVIE_INFO, RECEIVE_MOVIE_DATA } from '../actions/action_types';
const INITIAL_STATE = {};

function movieInfoReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MOVIE_INFO : {
      return { ...state };
    }
    case RECEIVE_MOVIE_DATA: {
      return { ...action.payload }
    }
    default : return state;
  }
}
export default movieInfoReducer;

/* We will be using the reducer to gather the state  */