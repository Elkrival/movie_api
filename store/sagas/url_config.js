import { call, put } from 'redux-saga/effects';
import { doAddMovieConfig } from '../actions/actions';

const API_KEY = process.env.API_KEY;

const fetchConfig = () =>{
    const URL = `https://api.themoviedb.org/3/configuration?api_key=${ API_KEY }`;
    return fetch(`${ URL }`).then(response => { 
        return response.json();
    })
}

function* handleConfig() {
    const result = yield call(fetchConfig);
    yield put(doAddMovieConfig(result));
    return result
}
export { handleConfig };