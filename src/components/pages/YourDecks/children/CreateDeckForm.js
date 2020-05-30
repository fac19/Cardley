import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import fetchData from '../../../../utils/fetchData/fetchData';

export default function CreateDeckForm({ setDeckCreate }) {
	const useStyles = makeStyles((theme) => ({
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '25ch',
			},
		},
		card: {}, // can style card also
		button: {}, // need to style buttons
	}));
	const classes = useStyles();

	const cancelHandler = (event) => {
		event.preventDefault(); // is prevent default required?
		setDeckCreate(false);
	};

	const doneHandler = (event) => {
		event.preventDefault(); // prevent page refresh?

		// perhaps try to refactor below without use of dom manipulation.
		const form = document.querySelector('#createDeckForm');
		const formData = new FormData(form);

		const deckName = formData.get('deckName');

		fetchData('POST', `decks/${deckName}`)
			.then(() => setDeckCreate(false))
			.then(() => window.location.reload()) // not the best method...try doing a useEffect instead so that not rerendering entire DOM! but how?
			.catch((error) => {
				return (
					<div>
						<p>`${error}`</p>
						<a href="#/">Return Home</a>
					</div>
				);
			}); // how to test error handling and also need to handle errors better here.
	};

	return (
		<Card
			style={{ backgroundColor: 'rgb(252,193,6)' }}
			className={classes.card}
		>
			<CardContent>
				{/* do we need label for the form in material UI? */}
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
	// edit the isRequired thing so doesnt create a warning
	setDeckCreate: PropTypes.func.isRequired,
};
