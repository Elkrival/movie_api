import { takeEvery, all } from 'redux-saga/effects';
import { MOVIES_FETCH } from '../actions/action_types';
import { handleMovies } from './movie';

export function* watchAll() {
    yield all([
        takeEvery(MOVIES_FETCH, handleMovies)
    ])
};

export function* helloSaga(){
    console.log('Hello')
}