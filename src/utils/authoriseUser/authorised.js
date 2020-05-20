import validateExp from './validateExp';

export default function authorised() {
	const authString = localStorage.getItem('auth');
	if (authString) {
		const auth = JSON.parse(authString);
		if (validateExp(auth.expires)) {
			return true;
		}
	}
	return false;
}
