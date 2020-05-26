import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const ViewDecksDiv = styled.div``;

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

export default function ViewDecks({ selectedDecks, setSelectedDecks, decks }) {
	return (
		<ViewDecksDiv>
			{decks ? (
				decks.map((deck) => (
					<SelectableDeck
						deck={deck}
						selectedDecks={selectedDecks}
						setSelectedDecks={setSelectedDecks}
						key={deck.deck_name}
					/>
				))
			) : (
				<h3>This is where your decks will appear...</h3>
			)}
		</ViewDecksDiv>
	);
}

function SelectableDeck({ deck, selectedDecks, setSelectedDecks }) {
	console.log('SelectableDeck -> selectedDecks', selectedDecks);
	const checkCard = () => {
		const newSelectedDates = {
			...selectedDecks,
			[deck.deck_id]: !selectedDecks[deck.deck_id],
		};

		// console.log(e.target.checked === true);
		setSelectedDecks(newSelectedDates);
	};
	console.log('deck ', deck);
	// console.log('in component, ', selectedDecks);
	const classes = useStyles();
	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={selectedDecks[deck.deck_id]}
					// checked={false}
					onClick={checkCard}
					// name="checkedB"
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

ViewDecks.propTypes = {
	selectedDecks: PropTypes.arrayOf(PropTypes.object),
	setSelectedDecks: PropTypes.func,
	decks: PropTypes.arrayOf(PropTypes.object),
};

ViewDecks.defaultProps = {
	selectedDecks: [{}],
	setSelectedDecks: () => {},
	decks: [{}],
};

SelectableDeck.propTypes = {
	deck: PropTypes.objectOf(PropTypes.string),
	selectedDecks: PropTypes.arrayOf(PropTypes.object),
	setSelectedDecks: PropTypes.func,
};

SelectableDeck.defaultProps = {
	deck: {},
	selectedDecks: [{}],
	setSelectedDecks: () => {},
};
