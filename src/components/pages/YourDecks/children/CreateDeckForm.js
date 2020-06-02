import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import fetchData from '../../../../utils/fetchData/fetchData';
import { useStyles, FormButtonsDiv, NewDeckForm } from './Deck-style';

export default function CreateDeckForm({ setDeckCreate }) {
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

	const cardClasses = `${classes.root} ${classes.newDeckForm}`;

	return (
		<Card className={cardClasses}>
			<CardMedia
				component="img"
				alt="Form to add new deck of cards"
				height="90"
				image="https://www.pngitem.com/pimgs/m/25-254660_transparent-flashcards-clipart-flashcard-png-png-download.png"
				title="Add new deck"
			/>
			<CardContent>
				<NewDeckForm id="createDeckForm" noValidate autoComplete="off">
					<Typography>Create a new deck</Typography>
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
					<FormButtonsDiv>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							onClick={doneHandler}
						>
							Save
						</Button>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							onClick={cancelHandler}
						>
							Cancel
						</Button>
					</FormButtonsDiv>
				</NewDeckForm>
			</CardContent>
		</Card>

		// <Card
		// 	style={{ backgroundColor: 'rgb(252,193,6)' }}
		// 	className={classes.card}
		// >
		// 	<CardContent>
		// 		{/* do we need label for the form in material UI? */}
		// 		<form
		// 			id="createDeckForm"
		// 			className={classes.root}
		// 			noValidate
		// 			autoComplete="off"
		// 		>
		// 			<TextField
		// 				variant="outlined"
		// 				margin="normal"
		// 				required
		// 				fullWidth
		// 				id="deckName"
		// 				label="New Deck Name"
		// 				name="deckName"
		// 				// autoComplete="deckName"
		// 				// autoFocus
		// 			/>
		// 			<Button
		// 				type="submit"
		// 				fullWidth
		// 				variant="contained"
		// 				color="primary"
		// 				className={classes.button}
		// 				onClick={doneHandler}
		// 			>
		// 				Done
		// 			</Button>
		// 			<Button
		// 				type="submit"
		// 				fullWidth
		// 				variant="contained"
		// 				color="primary"
		// 				className={classes.button}
		// 				onClick={cancelHandler}
		// 			>
		// 				Cancel
		// 			</Button>
		// 		</form>
		// 	</CardContent>
		// </Card>
	);
}

CreateDeckForm.propTypes = {
	// edit the isRequired thing so doesnt create a warning
	setDeckCreate: PropTypes.func.isRequired,
};
