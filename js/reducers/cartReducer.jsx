import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.cart, action) {
	switch(action.type) {
		case types.CART_ADD:
			return action.obj;
		case types.CART_REMOVE:
			return action.obj;
		case types.CART_SET:
			return action.obj;
		default:
			return state;
	}
}