import url from './backend-url';
import getJSON from './get-json';

const getFetch = ({ endpoint, errorMessage, authRequired = false }) => {
	const headers = {
		'content-type': 'application/JSON',
	};

	if (authRequired) {
		const auth = localStorage.getItem('auth');
		const { token } = JSON.parse(auth);
		headers.authorization = `Bearer ${token}`;
	}

	const fetchObj = {
		mode: 'cors',
		headers,
	};

	const urlAndEndpoint = url + endpoint;

	return fetch(urlAndEndpoint, fetchObj)
		.then((res) => getJSON(res, errorMessage))
		.catch(/* console.log */); // SEND ERROR PAGE AS WELL!
};

export default getFetch;
