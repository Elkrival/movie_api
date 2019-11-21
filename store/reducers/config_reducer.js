import  { MOVIE_CONFIG, CONFIG_UPDATE } from '../actions/action_types';
const INITIAL_STATE = {};

function movieConfigReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIE_CONFIG: {
            return { ...action.payload }
        }
        case CONFIG_UPDATE: {
            return { ...action.payload }
        }
        default: return state
    }
};
export default movieConfigReducer;