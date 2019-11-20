import { combineReducers } from 'redux';
import popularReducer from './popular_reducer';
import topRatedReducer from './top_rated_reducer';
import movieInfoReducer from './movie_info_reducer'

const rootReducer = combineReducers({
    popularState: popularReducer,
    topRatedState: topRatedReducer,
    currentMovieState: movieInfoReducer
})

export default rootReducer