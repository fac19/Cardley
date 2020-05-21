import url from './backend-url';
import getJSON from './get-json';

const getFetch = ({ endpoint, errorMessage }) => {
	const headers = {
		'content-type': 'application/JSON',
	};
	const fetchObj = {
		mode: 'cors',
		headers,
	};
	const urlAndEndpoint = url + endpoint;

	return fetch(urlAndEndpoint, fetchObj)
		.then((res) => getJSON(res, errorMessage))
		.catch(/* */); // SEND ERROR PAGE AS WELL!
};

export default getFetch;
