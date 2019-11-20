import { MOVIE_INFO } from '../actions/action_types';
const INITIAL_STATE = [];

const showMovie = (state, action) =>{
    state;
    action;
    debugger;
    return action.payload
}
function movieInfoReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MOVIE_INFO : {
      return showMovie(state, action);
    }
    default : return state;
  }
}
export default movieInfoReducer;