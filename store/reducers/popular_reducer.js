import { MOVIES_FETCH, POPULAR_MOVIES_ADD } from '../actions/action_types'

const INITIAL_STATE = [];

const applyAddMovies = (action) => {
    localStorage.setItem(`popularState`, JSON.stringify(action.payload))
    return action.payload
}

function popularReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIES_FETCH: {
            return state
        }
        case POPULAR_MOVIES_ADD: {
            return applyAddMovies(action)
        }
        default:
            return state
    }
}
export default popularReducer
