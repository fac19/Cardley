import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import randInt from '../../../utils/helpers/randomNumberGenerator';
// import getFetch from '../../../utils/fetchData/get-fetch';
import fetchData from '../../../utils/fetchData/fetchData';

import ReactCardFlip from 'react-card-flip';

import OneSidedCard from '../../cards/oneSidedCard';
import TwoSidedCard from '../../cards/twoSidedCard';

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
	const [currentCard, setCurrentCard] = useState({
		card: {
			front_text: 'Loading...',
			back_text: 'Loading...',
		},
	});
	const [oneSided, setOneSided] = useState('false');

	useEffect(() => {
		const whichDeck =
			props.deckToPractice[randInt(0, props.deckToPractice.length - 1)];
		setCurrentDeck(whichDeck);
		console.log(`decks/first/${whichDeck.deck_id}`);
		fetchData('get', `decks/first/${whichDeck.deck_id}`)
			.then((cardRecord) => {
				console.log('WE GOT THIS BACK:', cardRecord);
				setCurrentCard(cardRecord);
				// console.log(
				// 	'setOneSided :',
				// 	!cardRecord.card.back_text && !cardRecord.card.back_image,
				// );
				setOneSided(
					!cardRecord.card.back_text && !cardRecord.card.back_image,
				);
				console.log(oneSided);
			})
			.catch(console.log);
	}, []);

	const nextCardHandler = (position) => {
		console.log('Moving to next card');
		// call place with a place value
		const whichDeck =
			props.deckToPractice[randInt(0, props.deckToPractice.length - 1)];

		fetchData('POST', 'place/', {
			body: {
				deck_id: currentDeck,
				card_id: currentCard.card.card_id,
				place: 1,
				next_deck: whichDeck,
			},
		})
			.then((cardRecord) => {
				setCurrentDeck(whichDeck);
				console.log('WE GOT THIS BACK:', cardRecord);
				setCurrentCard(cardRecord);
				// console.log(
				// 	'setOneSided :',
				// 	!cardRecord.card.back_text && !cardRecord.card.back_image,
				// );
				setOneSided(
					!cardRecord.card.back_text && !cardRecord.card.back_image,
				);
				console.log(oneSided);
			})
			.catch((err) => {
				console.log('MSG:', err.message);
				console.log('CODE:', err.code);
				console.log('DEETS', err.details);
			});
	};

	return (
		<PracticeDiv>
			{/* if card is two sided */}
			{!oneSided && (
				<TwoSidedCard
					// cardColor={cardColor}
					currentDeck={currentDeck}
					currentCard={currentCard}
					nextCardHandler={nextCardHandler}
				/>
			)}
			{oneSided && (
				<OneSidedCard
					// cardColor={cardColor}
					currentDeck={currentDeck}
					currentCard={currentCard}
					nextCardHandler={nextCardHandler}
				/>
			)}
		</PracticeDiv>
	);
}

Practice.propTypes = {
	decksToPractice: PropTypes.object,
};
