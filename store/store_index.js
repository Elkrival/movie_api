import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers/root_reducer';
import createSagaMiddleware from 'redux-saga'
import { watchAll } from './sagas'

const sagaMiddleware = createSagaMiddleware()
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, undefined , compose(applyMiddleware(sagaMiddleware), composeWithDevTools()));
sagaMiddleware.run(watchAll);

export default store;