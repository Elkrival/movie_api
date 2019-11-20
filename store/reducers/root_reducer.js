import { combineReducers } from 'redux';
import popularReducer from './popular_reducer';
import topRatedReducer from './top_rated_reducer';

const rootReducer = combineReducers({
    popularState: popularReducer,
    topRatedState: topRatedReducer
})

export default rootReducer