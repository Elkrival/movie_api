import { MOVIES_FETCH } from './action_types';
import { MOVIES_ADD } from './action_types'

const doAddMovies = ({ results }) => {
    return {
    type: MOVIES_ADD,
    payload: results }
}
const doFetchMovies = (query) =>({
    type: MOVIES_FETCH,
    query
})
export { doAddMovies, doFetchMovies }