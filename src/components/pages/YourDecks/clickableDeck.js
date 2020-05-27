import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from './Deck-style';

export default function ClickableDeck({ deck }) {

	const classes = useStyles();
	return (
		<Card className={classes.card}>
		<CardContent>
			<Typography>{deck.deck_name}</Typography>
		</CardContent>
	</Card>
	);
}


ClickableDeck.propTypes = {
	deck: PropTypes.objectOf(PropTypes.string).isRequired,
};

