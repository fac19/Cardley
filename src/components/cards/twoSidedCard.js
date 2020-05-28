import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import Button from '@material-ui/core/Button';
import { useStyles, PrettoSlider } from './cards-styles';
import CardFace from './cardFace';

export default function TwoSidedCard({
	currentCard,
	setSliderValue,
	sliderValue,
	// currentDeck,
	nextCardHandler,
	isFlipped,
	setIsFlipped,
}) {
	const classes = useStyles();
	// const { children, open, value } = props;
	// const [isFlipped, setIsFlipped] = useState(false);
	const [sliderColor, setSliderColor] = useState('rgb(64,84,181)');

	const marks = [
		// We need to clarify where /place places cards back
		// and adjust the starting value accordingly
		{
			value: 1,
			label: 'Hard',
		},
		{
			value: currentCard.deck_length,
			label: 'Easy',
		},
	];

	const handleInputChange = (event, value) => {
		setSliderValue(value);

		if (value > currentCard.deck_length / 2) setSliderColor('green');
		else setSliderColor('red');
	};

	return (
		<>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
				<CardFace
					deckname={currentCard.card.deck_id}
					content={currentCard.card.front_text}
					color={currentCard.card.color}
				/>
				<CardFace
					deckname={currentCard.card.deck_id}
					content={currentCard.card.back_text}
					color={currentCard.card.color}
				/>
			</ReactCardFlip>

			{!isFlipped && (
				<Button
					className={classes.cardButton}
					variant="contained"
					color="primary"
					onClick={() => setIsFlipped(!isFlipped)}
				>
					Flip
				</Button>
			)}
			{isFlipped && (
				<>
					<PrettoSlider
						style={{ color: sliderColor }}
						valueLabelDisplay="auto"
						aria-label="pretto slider"
						value={sliderValue}
						min={1}
						max={currentCard.deck_length}
						marks={marks}
						onChange={handleInputChange}
					/>
					<Button
						className={classes.cardButton}
						variant="contained"
						color="default"
						onClick={() => {
							nextCardHandler();
						}}
					>
						Next
					</Button>
				</>
			)}
		</>
	);
}

TwoSidedCard.propTypes = {
	currentCard: PropTypes.shape({
		current_place: PropTypes.number,
		deck_length: PropTypes.number,
		card: PropTypes.object,
	}),
	setSliderValue: PropTypes.func,
	sliderValue: PropTypes.number,
	// currentDeck: PropTypes.number,
	nextCardHandler: PropTypes.func,
	isFlipped: PropTypes.bool,
	setIsFlipped: PropTypes.func,
};

TwoSidedCard.defaultProps = {
	currentCard: {
		current_place: 1,
		deck_length: 1,
		card: {},
	},
	setSliderValue: () => {},
	sliderValue: 1,
	// currentDeck: {},
	nextCardHandler: (a) => a,
	isFlipped: false,
	setIsFlipped: (a) => a,
};
