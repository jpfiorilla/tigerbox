import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.userData, action) {
	switch(action.type) {
		case types.LOGIN_SUCCESS:
			return action.userData;
		case types.LOGIN_FAILURE:
			return action.userData;
		default:
			return state;
	}
}