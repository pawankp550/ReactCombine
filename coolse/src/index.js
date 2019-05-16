import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import App from './Components/App';
import Reducers from './reducers/index';

const store = createStore(Reducers);
//store.subscribe(() => {console.log('store', store.getState())})
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))
