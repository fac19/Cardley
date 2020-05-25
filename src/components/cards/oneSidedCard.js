// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// // import ReactCardFlip from 'react-card-flip';
// import Button from '@material-ui/core/Button';
// import Slider from '@material-ui/core/Slider';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		width: 300 + theme.spacing(3) * 2,
// 	},
// 	margin: {
// 		height: theme.spacing(3),
// 	},
// 	slider: {
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
// }));

// const PrettoSlider = withStyles({
// 	slider: {
// 		color: '#52af77',
// 		height: 8,
// 	},
// 	thumb: {
// 		'height': 24,
// 		'width': 24,
// 		'backgroundColor': '#fff',
// 		'border': '2px solid currentColor',
// 		'marginTop': -8,
// 		'marginLeft': -12,
// 		'&:focus, &:hover, &$active': {
// 			boxShadow: 'inherit',
// 		},
// 	},
// 	active: {},
// 	valueLabel: {
// 		left: 'calc(-50% + 4px)',
// 	},
// 	track: {
// 		height: 8,
// 		borderRadius: 4,
// 	},
// 	rail: {
// 		height: 8,
// 		borderRadius: 4,
// 	},
// })(Slider);

export default function OneSidedCard() {
	return 'Hello';

	// const classes = useStyles();
	// return (
	// 	<>
	// 		{/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}
	// 		<Card
	// 			className={classes.root}
	// 			style={{ backgroundColor: props.cardColor }}
	// 		>
	// 			<CardContent>
	// 				<Typography
	// 					className={classes.title}
	// 					color="textSecondary"
	// 					gutterBottom
	// 				>
	// 					{props.currentDeck.deck_name}
	// 				</Typography>

	// 				<Typography variant="body1" component="p">
	// 					{props.currentCard.card.front_text}
	// 				</Typography>
	// 			</CardContent>
	// 		</Card>

	// 		<Typography gutterBottom>pretto.fr</Typography>
	// 		<PrettoSlider
	// 			valueLabelDisplay="auto"
	// 			aria-label="pretto slider"
	// 			defaultValue={20}
	// 		/>
	// 		<Button
	// 			className={classes.cardButton}
	// 			variant="contained"
	// 			color="primary"
	// 			onClick={() => {
	// 				// was setIsFlipped(!isFlipped)
	// 				// Now should trigger the next card
	// 				props.nextCardHandler();
	// 			}}
	// 		>
	// 			Next
	// 		</Button>
	// 	</>
	// );
}
