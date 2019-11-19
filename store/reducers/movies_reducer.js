import { MOVIES_FETCH, MOVIES_ADD } from '../actions/action_types'

const INITIAL_STATE = [];

const applyAddMovies = (action) => {
    return action.payload
}

function movieReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIES_FETCH: {
            return state
        }
        case MOVIES_ADD: {
            return applyAddMovies(action)
        }
        default:
            return state
    }
}
export default movieReducer
