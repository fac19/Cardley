import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import randInt from '../../../../utils/helpers/randomNumberGenerator';
import fetchData from '../../../../utils/fetchData/fetchData';
import { PracticeDiv } from '../practice.styles';
import OneSidedCard from '../../../cards/oneSidedCard';
import TwoSidedCard from '../../../cards/twoSidedCard';

export default function Practice({ decksToPractice }) {
	// const classes = useStyles();
	const [currentDeck, setCurrentDeck] = useState();
	const [currentCard, setCurrentCard] = useState({
		card: {
			front_text: 'Loading...',
		},
	});
	const [oneSided, setOneSided] = useState('false');
	const [sliderValue, setSliderValue] = useState(1);
	const [cardCount, setCardCount] = useState(0);
	const [isFlipped, setIsFlipped] = useState(false);

	useEffect(() => {
		setCurrentCard({ card: {} });
		setIsFlipped(false);

		// Pick a deck at random
		const whichDeck =
			decksToPractice[randInt(0, decksToPractice.length - 1)].deck_id;
		setCurrentDeck(whichDeck);

		// console.log('Cards reviewed this session:', cardCount);

		// If this is our first time round get from /decks/first
		if (cardCount === 0) {
			fetchData('get', `decks/first/${whichDeck}`)
				.then((cardRecord) => {
					setCurrentCard(cardRecord);
				})
				.catch(/* handle errors */);
		} else {
			// If this is any subsequent time get from /decks/first
			fetchData('POST', 'place/', {
				body: {
					deck_id: currentDeck,
					card_id: currentCard.card.card_id,
					place: sliderValue - 1,
					next_deck: whichDeck,
				},
			})
				.then((cardRecord) => {
					setCurrentCard(cardRecord);
				})
				.catch(/* handle errors */);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cardCount]);

	useEffect(() => {
		if (currentCard) {
			setOneSided(
				!currentCard.card.back_text && !currentCard.card.back_image,
			);
			if (currentCard.deck_length !== undefined) {
				const newPos = (currentCard.deck_length + 1) / 2;
				setSliderValue(Math.floor(newPos) || 1); // TODO
			}
		}
	}, [currentCard]);

	const nextCardHandler = () => {
		setCardCount(cardCount + 1);
	};

	return (
		<PracticeDiv>
			{/* if card is two sided */}
			{!oneSided && (
				<TwoSidedCard
					currentDeck={currentDeck}
					currentCard={currentCard}
					nextCardHandler={nextCardHandler}
					sliderValue={sliderValue}
					setSliderValue={setSliderValue}
					isFlipped={isFlipped}
					setIsFlipped={setIsFlipped}
				/>
			)}
			{oneSided && (
				<OneSidedCard
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
