import * as types from './actionTypes';
import MailChimpApi from '../api/MailChimpApi';

export function addEmailToMailChimp(email) {
	return function(dispatch) {
		return MailChimpApi.addToSignUpList(email).then(data => {
			console.log(data)
		}).catch(error => {
			throw(error);
		})
	}
}
