import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers/root_reducer';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import {loadState} from './localStorage';

const sagaMiddleware = createSagaMiddleware()
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const store = createStore(rootReducer, persistedState , compose(applyMiddleware(sagaMiddleware), composeWithDevTools()));
sagaMiddleware.run(rootSaga);

export default store;