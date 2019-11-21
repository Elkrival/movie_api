import  { MOVIE_CONFIG } from '../actions/action_types';
const INITIAL_STATE = {};

function movieConfigReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIE_CONFIG: {
            return { ...action.payload }
        }
        default: return state
    }
};
export default movieConfigReducer;