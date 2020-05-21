import React from "react"
import { useHistory } from 'react-router-dom'
import postFetch from "../../../utils/fetchData/post-fetch"

export default function LoginAction({email, password}) {
	const history = useHistory()
	history.push('/')
	const options = {
		endpoint: 'login',
		body: { email, password },
		errorMessage: 'Could not log you in',
	};
	postFetch(options)
	.then((res) => {
		localStorage.setItem('auth', JSON.stringify(res));
		history.push('/'); // should actually be second last page - accessible by same api
	});
	// .catch(() => {
	// 	history.push('/failed_login')
	// })
}