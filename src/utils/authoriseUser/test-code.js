// we manually enter this into browser console while waiting for genuine fetch
// for manual testing
const sampleIncomingLogin = {
	user_id: 500,
	user_name: 'Ivo',
	expires: '1587375168', // this is midnight tonight
	jwt: '123456789iasdof904rpg;nas[0u23rlnSDFAKSDF',
};
const stringifiedInfo = JSON.stringify(sampleIncomingLogin);
localStorage.setItem('auth', stringifiedInfo);
