import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/root_reducer';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: "root",
    storage,
    blacklist: ['modalState']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, undefined , compose(applyMiddleware(sagaMiddleware), composeWithDevTools()));
const persistor = persistStore(store);  
sagaMiddleware.run(rootSaga);

export default () => ({ store, persistor });