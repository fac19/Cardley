import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import FrontLogo from '../../../img/logoSVG'; // relative path to image
// import clsx from 'clsx';
// import Link from '@material-ui/core/Link';

const UserMenuDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 75vh;
	justify-content: space-around;
	width: 90vw;
	@media (min-width: 568px) {
		height: 55vh;
		width: 40vw;
		max-height: 550px;
		max-width: 350px;
	}
`;

const LogoContainer = styled.div`
	height: 50%;
	width: 100%;
`;

export default function Landing() {
	return (
		<UserMenuDiv>
			<LogoContainer>
				<FrontLogo />
			</LogoContainer>
			<Button
				variant="contained"
				color="primary"
				to="/login"
				component={Link}
			>
				Log In
			</Button>
			<Button
				variant="contained"
				color="primary"
				to="/signup"
				component={Link}
			>
				Sign Up
			</Button>
		</UserMenuDiv>
	);
}
