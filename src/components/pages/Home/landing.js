import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LandingDiv = styled.div``;

export default function Landing() {
	return (
		<LandingDiv>
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
		</LandingDiv>
	);
}
