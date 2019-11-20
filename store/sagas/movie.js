import { call, put } from 'redux-saga/effects';
import { doAddPopularMovies, doAddTopRatedMovies } from '../actions/actions';

const API_KEY = `0a12f622cf73e8bbf38643081189bb9c`


const fetchMovies = ( query ) => {
    const URL = `https://api.themoviedb.org/3/movie/${ query }?api_key=${ API_KEY}`
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
export { handleMovies };