import { takeEvery, all, takeLatest, take } from 'redux-saga/effects';
import { MOVIES_FETCH, MOVIE_CONFIG } from '../actions/action_types';
import { handleMovies } from './movie';
import { handleConfig } from './url_config'

function* watchAll() {
    yield takeEvery(MOVIES_FETCH, handleMovies)
};
function* getConfig() {
    yield handleConfig()
}

export function* rootSaga () {
    yield all([ watchAll(), getConfig()])
}