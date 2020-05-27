import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles, PrettoSlider } from './cards-styles';

export default function OneSidedCard({
	currentCard,
	setSliderValue,
	sliderValue,
	currentDeck,
	nextCardHandler,
}) {
	const classes = useStyles();
	// const { children, open, value } = props;
	const [sliderColor, setSliderColor] = useState('rgb(64,84,181)');

	const marks = [
		// We need to clarify where /place plac<>es cards back
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
			<Card
				className={classes.root}
				style={{ backgroundColor: currentCard.card.color }}
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
						{currentCard.card.front_text}
					</Typography>
				</CardContent>
			</Card>

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
	);
}

OneSidedCard.propTypes = {
	currentCard: PropTypes.shape({
		current_place: PropTypes.number,
		deck_length: PropTypes.number,
		card: PropTypes.object,
	}),
	setSliderValue: PropTypes.func,
	sliderValue: PropTypes.number,
	currentDeck: PropTypes.number,
	nextCardHandler: PropTypes.func,
};

OneSidedCard.defaultProps = {
	currentCard: {
		current_place: 1,
		deck_length: 1,
		card: {},
	},
	setSliderValue: () => {},
	sliderValue: 1,
	currentDeck: 1,
	nextCardHandler: (a) => a,
};
