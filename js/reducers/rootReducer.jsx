import { combineReducers } from 'redux';
import userData from './userReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
	userData,
	cart
})

export default rootReducer;