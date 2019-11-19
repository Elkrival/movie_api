import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store_index'
import App from './src/app/App';
import './src/main.scss';

ReactDom.render(
    <Provider store={store()}>
      <App/>,
//  </Provider>,
    document.getElementById('app') 
)
module.hot.accept();