import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom';
import { useStyles } from './Deck-style';

export default function ClickableDeck({ deck, setViewingDeck }) {
	const classes = useStyles();
	const history = useHistory();
	return (
		<Card
			className={classes.card}
			onClick={() => {
				setViewingDeck(deck.deck_id);
				history.push('/cards-in-deck');
			}}
		>
			<CardContent>
				<Typography>{deck.deck_name}</Typography>
			</CardContent>
		</Card>
	);
}

ClickableDeck.propTypes = {
	deck: PropTypes.objectOf(PropTypes.string).isRequired,
	setViewingDeck: PropTypes.func.isRequired,
};
