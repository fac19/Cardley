import postFetch from '../fetchData/post-fetch';

export default function login(formdata) {
	const options = {
		endpoint: 'login',
		body: {
			email: formdata.email,
			password: formdata.password,
		},
		errorMessage: 'Could not log you in',
	};
	return postFetch(options).then((res) => {
		localStorage.setItem('auth', JSON.stringify(res));
	});
}
