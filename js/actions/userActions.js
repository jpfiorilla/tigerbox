import * as types from './actionTypes';
import UserApi from '../api/UserApi';
import { browserHistory } from 'react-router';


export function createAccountSuccess(res) {
	console.log('response', res);
	if (res.success){
		localStorage.setItem('email', res.userData.email);
		localStorage.setItem('password', res.userData.password);
	}
	return {
		type: res.success ? types.CREATE_ACCOUNT_SUCCESS : types.CREATE_ACCOUNT_FAILURE,
		userData: res.userData,
		error: res.success ? '' : res.message
	}
}

export function createAccountAttempt(loginInfo) {
	return function(dispatch) {
		return UserApi.createAccount(loginInfo).then(data => {
			dispatch(createAccountSuccess(data));
		}).catch(error => {
			throw(error);
		})
	}
}

export function loginResult(res) {
	if (res.success && res.rememberMe){
		localStorage.setItem('email', res.userData.email);
		localStorage.setItem('password', res.userData.password);
	}
	return {
		type: res.success ? types.LOGIN_SUCCESS : types.LOGIN_FAILURE,
		userData: res.userData,
		message: res.message
	}
}

export function loginAttempt(loginInfo) {
	return function(dispatch) {
		return UserApi.login(loginInfo).then(data => {
			dispatch(loginResult(data));
		}).catch(error => {
			throw(error);
		})
	}
}

import initialState from '../reducers/initialState';
export function logOut(loginInfo) {
	return function(dispatch) {
		browserHistory.push('/')
		return dispatch({ type: types.LOGOUT, userData: initialState.userData })
	}
}

export function sendUpdatedAccountToStore(res) {
	console.log(res)
	return {
		type: res.success ? types.UPDATE_ACCOUNT_SUCCESS : types.UPDATE_ACCOUNT_FAILURE,
		userData: res.userData,
		message: res.message
	}
}

export function updateAccountAttempt(accountInfo) {
	return function(dispatch) {
		return UserApi.updateAccount(accountInfo).then(data => {
			dispatch(sendUpdatedAccountToStore(data));
		}).catch(error => {
			throw(error);
		})
	}
}
