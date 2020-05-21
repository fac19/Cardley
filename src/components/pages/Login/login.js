import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import login from '../../../utils/authoriseUser/login';

const LoginPageDiv = styled.div``;

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function LoginPage() {
	const history = useHistory();
	const classes = useStyles();

	const submitHandler = (event) => {
		event.preventDefault(); // prevent page refresh
		const form = document.querySelector('form');
		const formData = new FormData(form);
		console.log(formData.get('email'));
		console.log(formData.get('password'));
		login({
			email: formData.get('email'),
			password: formData.get('password'),
		}).then(() => history.push('/practice'));
		// should actually be second last page - accessible by same api
	};

	return (
		<LoginPageDiv>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
						Login
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={submitHandler}
					>
						+{' '}
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={
								<Checkbox value="remember" color="primary" />
							}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={submitHandler}
						>
							Login
						</Button>
						<Grid container>
							{/* <Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid> */}
							<Grid item>
								<Link href="/signup" variant="body2">
									Dont have an account? Signup
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				{/* <Box mt={8}>
					<Copyright />
				</Box> */}
			</Container>
		</LoginPageDiv>
	);
}
