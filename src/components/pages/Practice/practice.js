import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { makeStyles } from '@material-ui/core/styles';
import randInt from '../../../utils/helpers/randomNumberGenerator';
// import getFetch from '../../../utils/fetchData/get-fetch';
import fetchData from '../../../utils/fetchData/fetchData';

import OneSidedCard from '../../cards/oneSidedCard';
import TwoSidedCard from '../../cards/twoSidedCard';

const PracticeDiv = styled.div``;

// const useStyles = makeStyles({
// 	root: {
// 		width: 275,
// 		height: 300,
// 	},
// 	title: {
// 		fontSize: 14,
// 	},
// 	pos: {
// 		marginBottom: 12,
// 	},
// 	cardButton: {
// 		width: '80%',
// 	},
// });

export default function Practice({ decksToPractice }) {
	// const classes = useStyles();
	const [currentDeck, setCurrentDeck] = useState({});
	const [currentCard, setCurrentCard] = useState({
		card: {
			front_text: 'Loading...',
			back_text: 'Loading...',
		},
	});
	const [oneSided, setOneSided] = useState('false');
	const [sliderValue, setSliderValue] = useState(1);

	useEffect(() => {
		const whichDeck =
			decksToPractice[randInt(0, decksToPractice.length - 1)].deck_id;
		setCurrentDeck(whichDeck);
		// console.log(`decks/first/${whichDeck}`);
		fetchData('get', `decks/first/${whichDeck}`)
			.then((cardRecord) => {
				// console.log('WE GOT THIS BACK:', cardRecord);
				setCurrentCard(cardRecord);
				// console.log(
				// 	'setOneSided :',
				// 	!cardRecord.card.back_text && !cardRecord.card.back_image,
				// );
				setOneSided(
					!cardRecord.card.back_text && !cardRecord.card.back_image,
				);
				setSliderValue(Math.floor(cardRecord.deck_length) / 2 || 1); // TODO
				// console.log(oneSided);
			})
			// eslint-disable-next-line no-console
			.catch(console.log);
	}, [decksToPractice]);

	const nextCardHandler = (callback) => {
		// console.log('decksToPractice.length :', decksToPractice.length);
		// console.log('random num is : ', randInt(0, decksToPractice.length - 1));
		// console.log('Moving to next card');
		// call place with a place value
		const whichDeck =
			decksToPractice[randInt(0, decksToPractice.length - 1)].deck_id;
		// console.log('newRandomlySelectedDeck is :', whichDeck);
		fetchData('POST', 'place/', {
			body: {
				deck_id: currentDeck,
				card_id: currentCard.card.card_id,
				place: sliderValue - 1,
				next_deck: whichDeck,
			},
		})
			.then(async (cardRecord) => {
				setCurrentDeck(whichDeck);
				// console.log('WE GOT THIS BACK:', cardRecord);
				setCurrentCard(cardRecord);
				// console.log(
				// 	'setOneSided :',
				// 	!cardRecord.card.back_text && !cardRecord.card.back_image,
				// );
				setOneSided(
					!cardRecord.card.back_text && !cardRecord.card.back_image,
				);
				callback();
			})
			.catch(() => {
				// console.log('MSG:', err.message);
				// console.log('CODE:', err.code);
				// console.log('DEETS', err.details);
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
					sliderValue={sliderValue}
					setSliderValue={setSliderValue}
				/>
			)}
			{oneSided && (
				<OneSidedCard
					// cardColor={cardColor}
					currentDeck={currentDeck}
					currentCard={currentCard}
					nextCardHandler={nextCardHandler}
					sliderValue={sliderValue}
					setSliderValue={setSliderValue}
				/>
			)}
		</PracticeDiv>
	);
}

Practice.propTypes = {
	decksToPractice: PropTypes.arrayOf(PropTypes.object),
};

Practice.defaultProps = {
	decksToPractice: [
		{
			deck_name: 'French Vocab',
			deck_id: 1,
		},
		{
			deck_name: 'ES6 APIs',
			deck_id: 2,
		},
	],
};
