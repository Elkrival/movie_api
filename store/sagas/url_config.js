import { call, put } from 'redux-saga/effects';
import { doAddMovieConfig } from '../actions/actions';

const fetchConfig = () =>{
    const URL = `${process.env.CONFIG_URL}api_key=${ process.env.API_KEY }`;
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