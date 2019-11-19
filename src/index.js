import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import store from '../store/reducers/root_reducer';
import App from './app/App';
const title = `Como un mago`;
import './main.scss';

const movies = [
    {
        title: `My fair lady.`,
        poster: `This one`,
        id: 123
    },
    {
        title: `Redux`,
        poster: `fantastic`,
        id: 432
    }
]
ReactDom.render(
    // <Provider store={store()}>
      <App movies={ movies } />,
//  </Provider>,
    document.getElementById('app') 
)
module.hot.accept();