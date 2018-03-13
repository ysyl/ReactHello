import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

const reducer = combineReducers({
  root:rootReducer,
  routing: routerReducer
});

function configureStore() {
  const store = finalCreateStore(reducer);

  return store;
}

export default configureStore;
