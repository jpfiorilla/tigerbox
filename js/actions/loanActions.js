import * as types from './actionTypes';
import { UserApi } from '../api';

export function sendLoanObjectToStore(loanObject) {
	return { type: types.ADD_LOAN_LOCAL, loanObject };
}

export function addLoanLocal(loanObject) {
	return function(dispatch) {
		return dispatch(sendLoanObjectToStore(loanObject));
	};
}

export function sendLoanIndexToDeleteToStore(index) {
	return { type: types.DELETE_LOAN_LOCAL, index };
}

export function deleteLoanLocal(index) {
	return function(dispatch) {
		return dispatch(sendLoanIndexToDeleteToStore(index));
	};
}

export function sendEditedLoanToStore(loanObjectWithIndex) {
	return { type: types.EDIT_LOAN_LOCAL, loanObjectWithIndex };
}

export function editLoanLocal(loanObjectWithIndex) {
	console.log(loanObjectWithIndex)
	return function(dispatch) {
		return dispatch(sendEditedLoanToStore(loanObjectWithIndex));
	};
}

// remote

export function sendUserDataToStore(res) {
	return {
		type: res.success ? types.SUBMIT_LOANS_REMOTE_SUCCESS : types.SUBMIT_LOANS_REMOTE_FAILURE,
		userData: res.userData,
		message: res.message
	};
}

export function addLoanRemote(oldAndNewData) {
	let userObject = {
		oldUserData: oldAndNewData.oldUserData,
		newUserData: {
			loans: [ ...oldAndNewData.oldUserData.loans, oldAndNewData.newUserData ]
		}
	}
	//Relevant only for Upload Federal, where loans are batched together
	if (Array.isArray(userObject.newUserData.loans[userObject.newUserData.loans.length - 1])) {
		var newLoans = [].concat.apply([], userObject.newUserData.loans)
		userObject.newUserData.loans = newLoans
	}
	return function(dispatch) {
		return UserApi.updateAccount(userObject).then(data => {
			dispatch(sendUserDataToStore(data));
		}).catch(error => {
			throw(error);
		})
	};
}

export function editLoanRemote(oldAndNewData) {
	let loans = oldAndNewData.oldUserData.loans;
	loans[oldAndNewData.newUserData.editLoanIndex] = oldAndNewData.newUserData;
	delete loans[oldAndNewData.newUserData.editLoanIndex].selected;
	delete loans[oldAndNewData.newUserData.editLoanIndex].editLoanIndex;
	let userObject = {
		oldUserData: oldAndNewData.oldUserData,
		newUserData: { loans }
	}
	return function(dispatch) {
		return UserApi.updateAccount(userObject).then(data => {
			dispatch(sendUserDataToStore(data));
		}).catch(error => {
			throw(error);
		})
	};
}

export function deleteLoanRemote(oldAndNewData) {
	oldAndNewData.oldUserData.loans.splice(oldAndNewData.index, 1);
	let userObject = {
		oldUserData: oldAndNewData.oldUserData,
		newUserData: { loans: oldAndNewData.oldUserData.loans }
	}
	return function(dispatch) {
		return UserApi.updateAccount(userObject).then(data => {
			dispatch(sendUserDataToStore(data));
		}).catch(error => {
			throw(error);
		})
	};
}

// upload

// export function sendUserDataToStore(res) {
// 	return {
// 		type: res.success ? types.SUBMIT_LOANS_REMOTE_SUCCESS : types.SUBMIT_LOANS_REMOTE_FAILURE,
// 		userData: res.userData,
// 		message: res.message
// 	};
// }
