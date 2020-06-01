import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { ViewDecksDiv, useStyles } from './viewDeck-style';

export default function ViewDecks({ selectedDecks, setSelectedDecks, decks }) {
	return (
		<ViewDecksDiv>
			{decks ? (
				decks.map((deck) => (
					<SelectableDeck
						decks={decks}
						deck={deck}
						selectedDecks={selectedDecks}
						setSelectedDecks={setSelectedDecks}
						key={deck.deck_name}
					/>
				))
			) : (
				<h3>This is where your decks will appear...</h3>
			)}
		</ViewDecksDiv>
	);
}

function SelectableDeck({ deck, selectedDecks, setSelectedDecks }) {
	const [checkbox, setCheckbox] = React.useState(false);

	const checkCard = () => {
		const newSelectedDates = {
			...selectedDecks,
			[deck.deck_id]: !selectedDecks[deck.deck_id],
		};
		setCheckbox(!checkbox);
		setSelectedDecks(newSelectedDates);
	};

	const classes = useStyles();

	const cardClasses = `${classes.root} ${classes.card} ${
		checkbox && classes.checked
	}`;
	return (
		<FormControlLabel
			className={classes.checkboxParent}
			control={
				<Checkbox
					className={classes.checkboxClass}
					checked={selectedDecks[deck.deck_id] || false}
					onClick={checkCard}
					color="primary"
				/>
			}
			label={
				<Card className={cardClasses}>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="90"
						image="https://www.pngitem.com/pimgs/m/25-254660_transparent-flashcards-clipart-flashcard-png-png-download.png"
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography>{deck.deck_name}</Typography>
					</CardContent>
				</Card>
			}
		/>
	);
}

ViewDecks.propTypes = {
	selectedDecks: PropTypes.arrayOf(PropTypes.object).isRequired,
	setSelectedDecks: PropTypes.func.isRequired,
	decks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SelectableDeck.propTypes = {
	deck: PropTypes.objectOf(PropTypes.string).isRequired,
	selectedDecks: PropTypes.arrayOf(PropTypes.object).isRequired,
	setSelectedDecks: PropTypes.func.isRequired,
};
