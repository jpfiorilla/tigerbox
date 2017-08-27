import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore(initialState) {
	if (process.env.NODE_ENV == 'dev') return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk, logger)
	));
	else return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk)
	));
}
