import { call, put } from 'redux-saga/effects';
import { doAddMovieConfig } from '../actions/actions';

const API_KEY = `0a12f622cf73e8bbf38643081189bb9c`;

const fetchConfig = () =>{
    const URL = `https://api.themoviedb.org/3/configuration?api_key=${ API_KEY }`;
    return fetch(`${ URL }`).then(response => { 
        return response.json();
    })
}

function* handleConfig() {
    const result = yield fetchConfig();
    yield put(doAddMovieConfig(result))
}
export { handleConfig };