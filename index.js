import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/store_index'
import INIT_STATE from './store/init_persisted_state';
import App from './src/app/App';
import './src/main.css';
const { store, persistor } = configureStore()
ReactDom.render(
    <Provider store={store}>
      <PersistGate loading={[]} persistor={ persistor }>
        <App/>
      </PersistGate>
  </Provider>,
    document.getElementById('app') 
)
module.hot.accept();