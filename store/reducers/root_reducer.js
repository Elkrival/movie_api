import { combineReducers } from 'redux';
import movieReducer from './movies_reducer';

const rootReducer = combineReducers({
    moviesState: movieReducer
})

export default rootReducer