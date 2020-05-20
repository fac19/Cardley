export default function validateExp(exp) {
	// if (exp.toString().length !== 10) { // epoch time in seconds is 10
	// 	console.warn('exp is ', exp, ', is that correct?')
	// }
	const date = new Date();
	const now = Math.round(date.getTime() / 1000);
	// console.log({exp, now})
	// console.log(typeof now)
	// console.log(Number(exp) < now)

	return Number(exp) > now;
}
