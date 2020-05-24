import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import randInt from '../../../utils/helpers/randomNumberGenerator';
import getFetch from '../../../utils/fetchData/get-fetch';

import ReactCardFlip from 'react-card-flip';

const PracticeDiv = styled.div``;

const RangeInputDiv = styled.div`
	height: 75px;
`;

const useStyles = makeStyles({
	root: {
		width: 275,
		height: 300,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	cardButton: {
		width: '80%',
	},
});

export default function Practice(props) {
	const classes = useStyles();
	const [isFlipped, setIsFlipped] = useState(false);
	const [currentDeck, setCurrentDeck] = useState({});
	const [cardColor, setCardColor] = useState('rgb(244,211,66)');

	// console.log('DECKS TO PRCATICE:', props.deckToPractice[0]);

	const [currentCard, setCorrectCard] = useState({ front_text: 'loading' });

	useEffect(() => {
		const whichDeck =
			props.deckToPractice[randInt(0, props.deckToPractice.length - 1)];

		setCurrentDeck(whichDeck);
		console.log(`decks/first/${whichDeck.deck_id}`);
		getFetch({
			endpoint: `decks/first/${whichDeck.deck_id}`,
			errorMessage: "couldn't fetch card data",
			authRequired: true,
		}).then((cardRecord) => {
			console.log('WE GOT THIS BACK:', cardRecord);
		});
	}, []);

	return (
		<PracticeDiv>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
				<Card
					className={classes.root}
					style={{ backgroundColor: cardColor }}
				>
					<CardContent>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						>
							{currentDeck.deck_name}
						</Typography>

						<Typography variant="body1" component="p">
							{currentCard.front_text}
						</Typography>
					</CardContent>
				</Card>

				<Card
					className={classes.root}
					variant="outlined"
					style={{ backgroundColor: cardColor }}
				>
					<CardContent>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						>
							Mathematics
						</Typography>

						<Typography variant="body1" component="p">
							3
						</Typography>
					</CardContent>
				</Card>
			</ReactCardFlip>
			<RangeInputDiv></RangeInputDiv>
			<Button
				className={classes.cardButton}
				variant="contained"
				color="primary"
				onClick={() => setIsFlipped(!isFlipped)}
			>
				Flip
			</Button>
		</PracticeDiv>
	);
}

Practice.propTypes = {
	decksToPractice: PropTypes.object,
};
