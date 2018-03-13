import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './reducers/rootReducer.js';
import routes from './routes/AppRouter.js';
import configureStore from './configureStore.js';

const initialState = [
  {
    arthor:'admin',
    content: 'init ',
    like:224,
  }
];

const store = configureStore(null);

const history = syncHistoryWithStore(browserHistory, store);



ReactDOM.render((
  <Provider store={store}>
    {routes(history)}
  </Provider>
) , document.getElementById('root'));
registerServiceWorker();
