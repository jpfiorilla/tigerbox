import * as types from './actionTypes';
import UserApi from '../api/UserApi';
import { updateAccount } from './userActions';
import initState from '../reducers/initialState';

export function sendSurveyToStore(res) {
	console.log(res)
	return {
		type: res.success ? types.SURVEY_SUBMIT_SUCCESS : types.SURVEY_SUBMIT_FAILURE,
		userData: res.userData,
		message: res.message
	};
}

// export function submitSurveyLocal(surveyData) {
// 	return function(dispatch) {
// 		return dispatch(sendSurveyToStore(surveyData));
// 	};
// }

export function submitSurvey(surveyData) {
	return function(dispatch) {
		return UserApi.updateAccount(surveyData).then(data => {
			dispatch(sendSurveyToStore(data));
		}).catch(error => {
			throw(error);
		})
	}
}