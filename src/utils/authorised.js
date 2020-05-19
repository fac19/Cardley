// import validateExp from './validateExp';

function authorised() {
	return true;
}

// This async function is likely not the right way to go about this. I'll do some reading tonight.
// async function authorised() {
// 	const authString = localStorage.getItem('jwt');
// 	if (!authString) {
// 		return false;
// 	}
// 	const auth = JSON.parse(authString);
// 	if (validateExp(auth.exp)) {
// 		return fetch(`/server/verify/route/${auth.jwt}`).then(
// 			(res) => res.status === '200',
// 		);
// 	}
// 	return false;
// 	// convert auth string to object
// 	// return await fetch request to server, if res.status is 200 return true, else return false
// }

module.exports = authorised;

// const sampleIncomingLogin = {
// 	"user_id": 500,
// 	"user_name": "Ivo",
// 	"expires": "11589932799", // this is midnight tonight
// 	"jwt": "123456789iasdof904rpg;nas[0u23rlnSDFAKSDF"
// }
