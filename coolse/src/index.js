import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './Components/App';
import Reducers from './reducers/index';

const store = createStore(Reducers,{}, applyMiddleware(reduxThunk));
//store.subscribe(() => {console.log('store', store.getState())})
ReactDom.render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root')
    )
