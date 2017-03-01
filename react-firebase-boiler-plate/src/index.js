import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginContainer from './containers/login';

import {
  hashHistory,
  Router,
  Route,
  IndexRoute,
  Link,
  IndexLink
} from 'react-router';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={LoginContainer}>
      </Route>
      <Route path="/login" component={App}>
      </Route>
    </Router>
  </Provider>
),
  document.getElementById('root')
);
