import React from 'react';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ViewDecks from '../../../viewDecks/viewDecks';
import {
	CustomPracticeDiv,
	ButtonsDiv,
	TimerDiv,
	PracticePageText,
	useStyles,
} from './customPractice-style';

function findSelectedDecks({
	decks,
	setDecks,
	selectedDecks,
	setPracticeStage,
}) {
	const trueOrFalseArr = []; // trueOrFalseArr is only used for error handling (i.e. for isADeckSelected below)
	const lookupTerms = [];
	Object.entries(selectedDecks).forEach((deck) => {
		trueOrFalseArr.push(deck[1]);
		if (deck[1] === true) {
			lookupTerms.push(deck[0]);
		}
	}); // lookupTerms now contains a list of keys in selectedDecks for whick checked is "true"

	// is it neccessary to get rid of eval() here/a better way to write this/parse a string to bool without a for loop?
	// as there is no user input, perhaps no security risk?
	// eslint-disable-next-line no-eval
	const isADeckSelected = eval(trueOrFalseArr.join(' || '));

	if (!isADeckSelected) {
		console.log(`error, please select a deck`); // instead, display error message on page.
		return;
	}

	const subsetOfDecks = decks.filter((deck) => {
		return lookupTerms.includes(String(deck.deck_id));
	});
	setDecks(() => subsetOfDecks); // THIS needs to be unset once the practice session is over (as it is causing a bug)
	setPracticeStage(() => 'practice');
}

// const selectAllCheckboxes = () => {};

export default function CustomPractice({
	selectedDecks,
	setSelectedDecks,
	decks,
	setDecks,
	setPracticeStage,
	timer,
	setTimer,
}) {
	const classes = useStyles();

	const handleIncrement = () => {
		let value = timer;
		value += 1;
		setTimer(() => value);
	};

	const handleDecrement = () => {
		let value = timer;
		if (timer > 1) value -= 1;
		setTimer(() => value);
	};

	const select = (trueOrFalse) => {
		const deckIds = Object.keys(selectedDecks);
		const newSelectedDecks = {};
		deckIds.forEach((deck) => {
			newSelectedDecks[deck] = trueOrFalse;
		});

		setSelectedDecks(newSelectedDecks);
	};

	return (
		<>
			<PracticePageText>
				How long would you like to practice?
			</PracticePageText>
			<TimerDiv>
				{/* <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<RemoveIcon />}
      /> */}

				<IconButton
					color="primary"
					aria-label="remove one minute from timer"
					component="span"
					onClick={handleDecrement}
				>
					<RemoveIcon />
				</IconButton>
				<TextField
					className={classes.timerInput}
					id="outlined-basic"
					label="minutes"
					variant="outlined"
					value={timer}
					onChange={(event, value) => setTimer(value)}
				/>
				<IconButton
					color="primary"
					aria-label="add one minut to timer"
					component="span"
					onClick={handleIncrement}
				>
					<AddIcon />
				</IconButton>
			</TimerDiv>

			<PracticePageText>
				Which decks would you like to practice?
			</PracticePageText>
			<ButtonsDiv>
				{/* <ButtonGroup
					color="primary"
					aria-label="outlined primary button group"
				> */}
				<Button
					color="primary"
					variant="contained"
					className={classes.cardButton}
					onClick={() => select(true)}
				>
					Select All
				</Button>
				<Button
					color="primary"
					variant="contained"
					className={classes.cardButton}
					onClick={() => select(false)}
				>
					Select None
				</Button>
				{/* <Button
					color="primary"
					variant="contained"
					className={classes.cardButton}
					onClick={() => {}}
					disable
				>
					Show Important Cards Only
				</Button> */}
				{/* </ButtonGroup> */}
			</ButtonsDiv>
			<CustomPracticeDiv>
				<ViewDecks
					selectedDecks={selectedDecks}
					setSelectedDecks={setSelectedDecks}
					decks={decks}
					setDecks={setDecks}
				/>
			</CustomPracticeDiv>
			<Button
				// className={classes.cardButton}
				variant="contained"
				color="default"
				onClick={() => {
					// update state
					// startTimerFunction()
					findSelectedDecks({
						decks,
						setDecks,
						selectedDecks,
						setPracticeStage,
					});
				}}
			>
				Start Practice
			</Button>
		</>
	);
}

CustomPractice.propTypes = {
	selectedDecks: PropTypes.objectOf(PropTypes.string).isRequired,
	setSelectedDecks: PropTypes.func.isRequired,
	decks: PropTypes.arrayOf(PropTypes.object).isRequired,
	setDecks: PropTypes.func.isRequired,
	setPracticeStage: PropTypes.func.isRequired,
	timer: PropTypes.number,
	setTimer: PropTypes.func.isRequired,
};

CustomPractice.defaultProps = {
	timer: 0,
};
