import React from 'react';
import styled from 'styled-components';

import Link from '@material-ui/core/Link';

const LoggedInHomeDiv = styled.div``;

export default function loggedInHome() {
	return (<LoggedInHomeDiv>home
		<Link href="/practise"> Practise </Link>
		<Link href="/custom-practise"> Custom Practise </Link>
		<Link href="/your-decks"> Manage Your Decks </Link>
	</LoggedInHomeDiv>);

}