import { MOVIES_FETCH } from './action_types';
import { MOVIES_ADD } from './action_types'

const doAddMovies = (movies) => ({
    type: MOVIES_ADD,
    movies
});
const doFetchMovies = (query) =>(console.log(query, '-------'),{
    type: MOVIES_FETCH,
    query
})
export { doAddMovies, doFetchMovies }