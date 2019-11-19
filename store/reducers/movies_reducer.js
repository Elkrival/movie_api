import { MOVIES_FETCH, MOVIES_ADD } from '../actions/action_types'

const INITIAL_STATE = [];

const applyAddMovies = (state, action) => {
    console.log(state, action);
    return state
}

function movieReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIES_FETCH: {
            return state
        }
        case MOVIES_FETCH: {
            return applyAddMovies(state, action)
        }
        default:
            return state
    }
}
export default movieReducer
/*/*0a12f622cf73e8bbf38643081189bb9c*/