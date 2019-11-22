import  { RECEIVE_CONFIG, ADD_CONFIG_TO_STORE } from '../actions/action_types';
const INITIAL_STATE = {};

function movieConfigReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case RECEIVE_CONFIG: {
            return { ...state }
        }
        case ADD_CONFIG_TO_STORE: {
            return { ...action.payload }
        }
        default: return state
    }
};
export default movieConfigReducer;