import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from 'react-router-dom';
import { useStyles } from './Deck-style';

export default function ClickableDeck({ deck, setViewingDeck }) {
	const classes = useStyles();
	const history = useHistory();

	const cardClasses = `${classes.root} ${classes.card}`;

	return (
		<Card className={cardClasses}>
			<CardMedia
				component="img"
				alt="Clickable deck of flashcards"
				height="90"
				image="https://www.pngitem.com/pimgs/m/25-254660_transparent-flashcards-clipart-flashcard-png-png-download.png"
				title="Clickable deck of flashcards"
				onClick={() => {
					setViewingDeck(deck.deck_id);
					history.push('/cards-in-deck');
				}}
			/>
			<CardContent>
				<Typography>{deck.deck_name}</Typography>
			</CardContent>
		</Card>
	);
}

ClickableDeck.propTypes = {
	deck: PropTypes.objectOf(PropTypes.any).isRequired,
	setViewingDeck: PropTypes.func.isRequired,
};
