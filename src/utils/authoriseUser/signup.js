import postFetch from '../fetchData/post-fetch';

export default function signup(formdata) {
	const options = {
		endpoint: 'signup',
		body: {
			name: formdata.name,
			email: formdata.email,
			password: formdata.password,
		},
		errorMessage: 'Sorry, there was a problem signing you up',
	};
	return postFetch(options).then((res) => {
		localStorage.setItem('auth', JSON.stringify(res));
	});
}
