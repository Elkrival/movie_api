/* This file will handle all of the inidivual state selection processes such as getting the posters of a movie or the info of the movie */

function getMovies(state){
    console.log(state);
    return state.moviesState;
}

export { getMovies }