import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactCardFlip from 'react-card-flip';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

// import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
		height: 300,
	},
	margin: {
		height: theme.spacing(3),
	},
	slider: {
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
}));

const PrettoSlider = withStyles({
	root: {
		color: '#52af77',
		height: 8,
	},
	thumb: {
		'height': 24,
		'width': 24,
		'backgroundColor': '#fff',
		'border': '2px solid currentColor',
		'marginTop': -8,
		'marginLeft': -12,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 8,
		borderRadius: 4,
	},
	rail: {
		height: 8,
		borderRadius: 4,
	},
})(Slider);

export default function TwoSidedCard({
	currentCard,
	setSliderValue,
	sliderValue,
	currentDeck,
	nextCardHandler,
}) {
	const classes = useStyles();
	// const { children, open, value } = props;
	const [isFlipped, setIsFlipped] = useState(false);

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
	};

	return (
		<>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
				<Card className={classes.root}>
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

				<Card
					className={classes.root}
					variant="outlined"
					// style={{ backgroundColor: cardColor }}
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
							{currentCard.card.back_text}
						</Typography>
					</CardContent>
				</Card>
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
						color="primary"
						onClick={() => {
							nextCardHandler(() => {
								setIsFlipped(!isFlipped);
							});
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
	currentDeck: PropTypes.number,
	nextCardHandler: PropTypes.func,
};

TwoSidedCard.defaultProps = {
	currentCard: {
		current_place: 1,
		deck_length: 1,
		card: {},
	},
	setSliderValue: 1,
	sliderValue: 1,
	currentDeck: {},
	nextCardHandler: (a) => a,
};
