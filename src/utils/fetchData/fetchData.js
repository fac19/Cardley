import url from './backend-url';

const decodeJSONOrDie = (res) => res.json();

/* If the API returns an error the decoded object will contain a .error and .code property. If we see these we turn them into a real error and throw it so the caller can catch it and take steps to notify the user. */
const dieIfError = (res) => {
	if (res.error) {
		const err = new Error(res.error);
		err.status = res.code;
		err.details = res;
		throw err;
	}
	return res;
};

/* Fetches routes from the API. The first two params are mandatory, the third is an optional object. This object is where 'body' for POST and PUT requests is specified. 'auth' ensures the request is sent with the Authorization header. It defaults to true as most routes require it.
 */
const fetchData = (method, endpoint, options = {}) => {
	const { body, auth = true } = options;

	const headers = { 'content-type': 'application/JSON' };

	if (auth) {
		const authObject = localStorage.getItem('auth');
		const { token } = JSON.parse(authObject);
		headers.authorization = `Bearer ${token}`;
	}

	const fetchObj = {
		method,
		mode: 'cors',
		headers,
	};

	if (body) fetchObj.body = JSON.stringify(body);

	return fetch(url + endpoint, fetchObj)
		.then(decodeJSONOrDie)
		.then(dieIfError);
};

export default fetchData;
