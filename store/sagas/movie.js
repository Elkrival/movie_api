import { call, put } from 'redux-saga/effects';
import { doAddPopularMovies, doAddTopRatedMovies, doAddMovieDetails } from '../actions/actions';

const fetchMovies = ( query ) => {
    const URL = `${process.env.MOVIE_URL}${ query }?api_key=${ process.env.API_KEY }`
    return fetch(`${ URL }`).then(response => {
        return response.json()
    })
}
function* handleMovies(action) {
    const { query } = action;
    const result = yield call(fetchMovies, query);
    if ( query === 'popular') yield put(doAddPopularMovies(result));
    if (query === 'top_rated') yield put(doAddTopRatedMovies(result))
};

const fetchMovie = ( action ) =>{
    const id = action.payload;
    const URL = `${process.env.MOVIE_URL}${ id }?api_key=${ process.env.API_KEY }&append_to_response=videos,images`
    return fetch(`${ URL }`).then(response => response.json());
};
function* handleMovieDetails(id) {
    try{
    const result = yield call(fetchMovie,id);
    yield put(doAddMovieDetails(result));
    return result;
    }catch(e) {
        console.log(e)
    }
  }
export { handleMovies, handleMovieDetails};