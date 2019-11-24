import { combineReducers } from 'redux';
import popularReducer from './popular_reducer';
import topRatedReducer from './top_rated_reducer';
import movieInfoReducer from './movie_info_reducer'
import movieConfigReducer from './config_reducer';
import modalStateReducer from './modal_state_reducer';

const rootReducer = combineReducers({
    popularState: popularReducer,
    topRatedState: topRatedReducer,
    currentMovieState: movieInfoReducer,
    configState: movieConfigReducer,
    modalState: modalStateReducer
})

export default rootReducer