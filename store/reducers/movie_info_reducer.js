import { MOVIE_INFO } from '../actions/action_types';
const INITIAL_STATE = {};

const showMovie = (action) =>{
  const { payload: { selectedMovieList, id }} = action
  const movie = selectedMovieList.filter( el => el.id === +id)[0]
    return movie;
}
function movieInfoReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MOVIE_INFO : {
      return showMovie(action);
    }
    default : return state;
  }
}
export default movieInfoReducer;

/* We will be using the reducer to gather the state  */