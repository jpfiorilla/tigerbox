import 'whatwg-fetch';
import axios from 'axios';

class LoginApi {
	static logIn(loginInfo){
		return fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(loginInfo),
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(res => {
			return res.json();
		})
		.catch(err => {
			console.log(err);
		})
	};
}


export default LoginApi;