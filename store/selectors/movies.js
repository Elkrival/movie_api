/* This file will handle all of the inidivual state selection processes such as getting the posters of a movie or the info of the movie */

function getTopRated(state) {
    return state.topRatedState
}
function getPopular(state) {
    return state.popularState
}
export { getPopular, getTopRated }