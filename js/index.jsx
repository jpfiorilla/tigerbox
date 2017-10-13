import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Match } from 'react-router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import "babel-polyfill";

import App from './components/app';

import HomePage from './components/home/HomePage';
import Catering from './components/home/Catering';
import Gallery from './components/home/Gallery';
import MyStory from './components/home/MyStory';
import Checkout from './components/home/Checkout';
import { CreateAccount } from './components/account';

const store = configureStore();

import actions from './actions';
let { _id, token } = localStorage;
_id && token && store.dispatch(actions.loginAttempt({ _id, token }));

render((
	<Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	      	<IndexRoute component={HomePage} />
					<Route path="/catering" component={Catering} />
					<Route path="/gallery" component={Gallery} />
					<Route path="/my-story" component={MyStory} />
					<Route path="/checkout" component={Checkout} />
	    </Route>
	  </Router>
	</Provider>
), document.getElementById('main'));
