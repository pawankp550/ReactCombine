import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { getHeroById } from './actions/heroesActions';

import App from './App';
import Reducers from './reducers/index';

const store = createStore(Reducers);
console.log('Store: ',store.getState());
store.subscribe(() => {console.log('store', store.getState())})
store.dispatch(getHeroById(2));



ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))
