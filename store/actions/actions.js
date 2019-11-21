import { MOVIES_FETCH, TOP_MOVIES_ADD, POPULAR_MOVIES_ADD, MOVIE_INFO, MOVIE_CONFIG, CONFIG_UPDATE, RECEIVE_MOVIE_DATA } from './action_types';

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
const showSelectedMovie = (payload) =>{
    return {
        type: MOVIE_INFO,
        payload
    }
}
const doAddMovieConfig = ( payload ) => {
    return {
        type: MOVIE_CONFIG,
        payload
    }
}
const updateConfig = ( payload ) =>{
    return {
        type: CONFIG_UPDATE,
        payload
    }
}
const doAddMovieDetails = (payload) =>{
    return {
        type: RECEIVE_MOVIE_DATA,
        payload
    }
}
export { doAddPopularMovies, doFetchMovies, doAddTopRatedMovies, showSelectedMovie, doAddMovieConfig, updateConfig, doAddMovieDetails }