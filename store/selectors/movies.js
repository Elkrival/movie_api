/* This file will handle all of the inidivual state selection processes such as getting the posters of a movie or the info of the movie */

function getTopRated(state) {
    return state.topRatedState
}
function getPopular(state) {
    return state.popularState
}
function getMovieDetails(state) {
    return state.currentMovieState
}
function getConfig(state) {
    return state.configState
}
export { getPopular, getTopRated, getMovieDetails, getConfig }