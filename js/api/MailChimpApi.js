import 'whatwg-fetch';
import axios from 'axios';

class MailChimpApi {
	static addToSignUpList(email){
		return fetch('/api/mailchimp/register-email', {
			method: 'POST',
			body: JSON.stringify({emailAddress: email}),
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(res => {
      console.log("Signed Up")
		})
		.catch(err => {
			console.log(err);
		})
	};
}


export default MailChimpApi;
