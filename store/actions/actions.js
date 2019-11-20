import { MOVIES_FETCH, TOP_MOVIES_ADD, POPULAR_MOVIES_ADD } from './action_types';

const doAddPopularMovies = ({ results }) => {
    return {
    type: POPULAR_MOVIES_ADD,
    payload: results }
}
const doFetchMovies = (query) =>({
    type: MOVIES_FETCH,
    query
});
const doAddTopRatedMovies = ({ results }) =>{
    return {
        type: TOP_MOVIES_ADD,
        payload: results
    }
}
export { doAddPopularMovies, doFetchMovies, doAddTopRatedMovies }