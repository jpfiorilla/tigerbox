import 'whatwg-fetch';
import axios from 'axios';

class UserApi {
	static createAccount(accountInfo){
		return fetch('/api/create-account', {
			method: 'POST',
			body: JSON.stringify(accountInfo),
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
	static login(loginInfo){
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
	static updateAccount(accountInfo){
		return fetch('/api/update-account', {
		// let databaseName = 'simplifi', collection = 'users', { _id } = accountInfo;
		// console.log(accountInfo)
		// return fetch(`https://api.mlab.com/api/1/databases/${databaseName}/collections/${collection}/${_id}?apiKey=${globals.apiKey}`, { // can do it directly thru mlab API if we use CORS
			method: 'PUT',
			body: JSON.stringify(accountInfo),
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

export default UserApi;