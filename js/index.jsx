import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Match } from 'react-router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import "babel-polyfill";

import App from './components/app';

import HomePage from './components/home/HomePage';
import { CreateAccount } from './components/account';

const store = configureStore();

import actions from './actions';
let { email, password } = localStorage;
email && password && store.dispatch(actions.loginAttempt({ email, password }));

render((
	<Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	      	<IndexRoute component={HomePage} />
	    </Route>
	  </Router>
	</Provider>
), document.getElementById('main'));
