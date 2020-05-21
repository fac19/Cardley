import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// import Link from '@material-ui/core/Link';

const UserMenuDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 75vh;
	justify-content: space-around;
	width: 90vw;
`;

const LogoContainer = styled.div`
	height: 50%;
	width: 100%;
`;

export default function userMenu() {
	return (
		<UserMenuDiv>
			home
			<LogoContainer>Logo here</LogoContainer>
			<Button
				component={Link}
				to="/practice"
				variant="contained"
				color="primary"
			>
				Practice
			</Button>
			<Button
				component={Link}
				to="/manage-decks"
				variant="contained"
				color="primary"
			>
				Manage Decks
			</Button>
		</UserMenuDiv>
	);
}
