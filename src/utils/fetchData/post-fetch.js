import url from './backend-url';
import getJSON from './get-json';

const postFetch = ({ endpoint, body, errorMessage }) => {
	const headers = {
		'content-type': 'application/JSON',
	};
	const fetchObj = {
		method: 'POST',
		mode: 'cors',
		headers,
		body: JSON.stringify(body),
	};

	const urlAndEndpoint = url + endpoint;

	return fetch(urlAndEndpoint, fetchObj)
		.then((res) => getJSON(res, errorMessage))
		.catch(/* */); // SEND ERROR PAGE AS WELL!
};

export default postFetch;
