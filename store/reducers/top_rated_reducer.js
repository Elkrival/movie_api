import { TOP_MOVIES_ADD } from '../actions/action_types'

const INITIAL_STATE = [];

const applyAddMovies = (action) => {
    localStorage.setItem(`topRatedState`, JSON.stringify(action.payload));
    return action.payload
}

function movieReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOP_MOVIES_ADD: {
            return applyAddMovies(action)
        }
        default:
            return state
    }
}
export default movieReducer