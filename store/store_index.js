import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import createSagaMiddleware from 'redux-saga'
import { watchAll } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, undefined ,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAll);

export default store;