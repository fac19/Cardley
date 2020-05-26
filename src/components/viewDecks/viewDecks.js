import React from 'react';
import styled from 'styled-components';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const ViewDecksDiv = styled.div``;

// const GreenCheckbox = withStyles({
// 	root: {
// 		'color': green[400],
// 		'&$checked': {
// 			color: green[600],
// 		},
// 	},
// 	card: {
// 		width: '45%',
// 	},
// 	checked: {},
// })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
	root: {
		width: 150,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	card: {
		width: '150px',
		height: '75px',
		margin: '1rem',
	},
});

export default function ViewDecks({
	selectedDecks,
	setSelectedDecks,
	decks,
	setDecks,
}) {
	return (
		<ViewDecksDiv>
			<h2>Your Decks</h2>
			{decks ? (
				decks.map((deck) => (
					<SelectableDeck
						deck={deck}
						selectedDecks={selectedDecks}
						setSelectedDecks={setSelectedDecks}
					/>
				))
			) : (
				<h3>This is where your decks will appear...</h3>
			)}
		</ViewDecksDiv>
	);
}

function SelectableDeck({ deck, selectedDecks, setSelectedDecks }) {
	const checkCard = () => {
		setSelectedDecks(() => {
			selectedDecks[deck.deck_id] = !selectedDecks[deck.deck_id];
			return selectedDecks;
		});
	};

	const classes = useStyles();
	return (
		<FormControlLabel
			control={
				<Checkbox
					// checked={checked}
					onChange={checkCard}
					name="checkedB"
					color="primary"
				/>
			}
			label={
				<Card className={classes.card}>
					<CardContent>
						<Typography>{deck.deck_name}</Typography>
					</CardContent>
				</Card>
			}
		/>
	);
}
