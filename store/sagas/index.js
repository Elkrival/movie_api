import { takeEvery, all, takeLatest, take } from 'redux-saga/effects';
import { MOVIES_FETCH, MOVIE_INFO } from '../actions/action_types';
import { handleMovies, handleMovieDetails } from './movie';
import { handleConfig } from './url_config'

function* watchAll() {
    yield takeEvery(MOVIES_FETCH, handleMovies)
};
function* getConfig() {
    yield handleConfig()
}
function* getDetails() {
    yield takeLatest(MOVIE_INFO, handleMovieDetails)
};
export function* rootSaga () {
    yield all([ watchAll(), getConfig(), getDetails() ])
}