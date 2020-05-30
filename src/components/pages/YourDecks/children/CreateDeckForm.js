import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { useStyles } from './Deck-style';
import { makeStyles } from '@material-ui/core/styles';

export default function CreateDeckForm() {
	// this is the textfield styling from material-ui docs
	const useStyles = makeStyles((theme) => ({
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '25ch',
			},
		},
		button: {},
	}));
	const classes = useStyles();

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
						id="outlined-basic"
						label="New Deck Name"
						variant="outlined"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.button}
						// onClick={}
					>
						Done
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.button}
						// onClick={}
					>
						Cancel
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
