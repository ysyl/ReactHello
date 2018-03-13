import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../App.js';
import Home from '../views/Home.js';

const routes = history => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
