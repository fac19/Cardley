import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function CreateDeckForm({ setDeckCreate }) {
	const useStyles = makeStyles((theme) => ({
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '25ch',
			},
		},
		button: {}, // need to style button
	}));
	const classes = useStyles();

	const cancelHandler = (event) => {
		event.preventDefault();
		setDeckCreate(false);
	};

	const doneHandler = (event) => {
		event.preventDefault(); // prevent page refresh
		const form = document.querySelector('#createDeckForm');
		const formData = new FormData(form);
		// eslint-disable-next-line no-console
		console.log(formData.get('deckName'));

		// login({
		// 	email: formData.get('email'),
		// 	password: formData.get('password'),
		// })
		// 	.then(() => history.push('/home'))
		// 	.catch(() => {
		// 		setSelectionErr(true);
		// 		setTimeout(() => {
		// 			setSelectionErr(false);
		// 		}, 4000);
		// 	});

		// setDeckCreate(false);
	};

	return (
		<Card
			style={{ backgroundColor: 'rgb(252,193,6)' }}
			className={classes.card}
			// onClick={() => {
			// 	setViewingDeck(deck.deck_id);
			// 	history.push('/cards-in-deck');
			// }}
		>
			<CardContent>
				{/* <label htmlFor="createDeckForm">New
					Deck Name</label> */}
				<form
					id="createDeckForm"
					className={classes.root}
					noValidate
					autoComplete="off"
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="deckName"
						label="New Deck Name"
						name="deckName"
						// autoComplete="deckName"
						// autoFocus
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={doneHandler}
					>
						Done
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={cancelHandler}
					>
						Cancel
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}

CreateDeckForm.propTypes = {
	setDeckCreate: PropTypes.func.isRequired,
};
