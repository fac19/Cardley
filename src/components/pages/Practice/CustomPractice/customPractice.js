import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FlashMessage from 'react-flash-message';
import ViewDecks from '../../../viewDecks/viewDecks';
import {
	CustomPracticeDiv,
	ButtonsDiv,
	TimerDiv,
	PracticePageText,
	FlashMessageDiv,
	useStyles,
	multiSelectButtons,
} from './customPractice-style';

function findSelectedDecks({
	decks,
	setDecks,
	selectedDecks,
	setPracticeStage,
	setSelectionError,
}) {
	// is all object entries in selectedDecks is false, then no decks were selected.
	if (Object.values(selectedDecks).every((val) => val === false)) {
		console.log('not selected decks');
		setSelectionError(true);

		setTimeout(() => {
			setSelectionError(false);
		}, 6000);
		return;
	}
	const lookupTerms = [];
	Object.entries(selectedDecks).forEach((deck) => {
		if (deck[1] === true) {
			lookupTerms.push(deck[0]);
		}
	});

	const subsetOfDecks = decks.filter((deck) => {
		return lookupTerms.includes(String(deck.deck_id));
	});
	setDecks(() => subsetOfDecks);
	setPracticeStage(() => 'practice');
}

export default function CustomPractice({
	selectedDecks,
	setSelectedDecks,
	decks,
	setDecks,
	setPracticeStage,
	timer,
	setTimer,
}) {
	const [selectionError, setSelectionError] = React.useState(false);

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
			<ButtonsDiv style={multiSelectButtons}>
				<Button
					color="primary"
					variant="outlined"
					size="small"
					onClick={() => select(true)}
				>
					Select All
				</Button>
				<Button
					size="small"
					color="primary"
					variant="outlined"
					onClick={() => select(false)}
				>
					Select None
				</Button>
			</ButtonsDiv>
			<CustomPracticeDiv>
				<ViewDecks
					selectedDecks={selectedDecks}
					setSelectedDecks={setSelectedDecks}
					decks={decks}
					setDecks={setDecks}
				/>
			</CustomPracticeDiv>
			<FlashMessageDiv>
				{selectionError && (
					<FlashMessage duration={5000}>
						<span className={classes.flashMessage}>
							Please select decks to pratice
						</span>
					</FlashMessage>
				)}
			</FlashMessageDiv>

			<Button
				className={classes.startButton}
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
						setSelectionError,
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
	decks: PropTypes.arrayOf(PropTypes.object),
	setDecks: PropTypes.func.isRequired,
	setPracticeStage: PropTypes.func.isRequired,
	timer: PropTypes.number,
	setTimer: PropTypes.func.isRequired,
};

CustomPractice.defaultProps = {
	timer: 0,
	decks: null,
};
