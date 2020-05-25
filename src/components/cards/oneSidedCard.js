import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import ReactCardFlip from 'react-card-flip';
import Button from '@material-ui/core/Button';

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

export default function OneSidedCard(props) {
	const classes = useStyles();
	// const [isFlipped, setIsFlipped] = useState(false);

	return (
		<>
			{/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}
			<Card
				className={classes.root}
				style={{ backgroundColor: props.cardColor }}
			>
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						{props.currentDeck.deck_name}
					</Typography>

					<Typography variant="body1" component="p">
						{props.currentCard.card.front_text}
					</Typography>
				</CardContent>
			</Card>

			{/* <Card
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
							{props.currentDeck.deck_name}
						</Typography>

						<Typography variant="body1" component="p">
							{props.currentCard.card.back_text}
						</Typography>
					</CardContent>
				</Card> */}
			{/* </ReactCardFlip> */}
			<Button
				className={classes.cardButton}
				variant="contained"
				color="primary"
				onClick={() => {
					// was setIsFlipped(!isFlipped)
					// Now should trigger the next card
					props.nextCardHandler();
				}}
			>
				Next
			</Button>
		</>
	);
}
