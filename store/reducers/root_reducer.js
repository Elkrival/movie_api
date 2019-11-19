import { combineReducers } from 'redux';
import movieReducer from './movies_reducer';
import topRatedReducer from './top_rated_reducer';

const rootReducer = combineReducers({
    moviesState: movieReducer,
    topRatedState: topRatedReducer
})

export default rootReducer