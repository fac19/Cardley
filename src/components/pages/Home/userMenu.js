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

// const styles = {
// 	root: {
// 		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// 		borderRadius: 3,
// 		border: 0,
// 		color: 'white',
// 		height: 48,
// 		padding: '0 30px',
// 		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
// 	},
// };

export default function userMenu() {
	// const { classes } = props;

	// TODO This file / component needs to be renamed to homePage!!!
	// TODO This file / component needs to be renamed to homePage!!!
	// TODO This file / component needs to be renamed to homePage!!!
	// TODO This file / component needs to be renamed to homePage!!!
	// TODO This file / component needs to be renamed to homePage!!!

	return (
		<UserMenuDiv>
			<LogoContainer>
				<FrontLogo />
			</LogoContainer>
			<Button
				// className={clsx(classes.root)}
				component={Link}
				to="/practice"
				variant="contained"
				color="primary"
			>
				Practice
			</Button>
			<Button
				component={Link}
				to="/your-decks"
				variant="contained"
				color="primary"
			>
				Your Decks
			</Button>
			<Button
				component={Link}
				to="/public-decks"
				variant="contained"
				color="primary"
			>
				Public Decks
			</Button>
		</UserMenuDiv>
	);
}
