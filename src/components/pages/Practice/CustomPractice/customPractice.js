import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
// import getFetch from '../../../../utils/fetchData/get-fetch';

import ViewDecks from '../../../viewDecks/viewDecks';

const CustomPracticeDiv = styled.div``;

function findSelectedDecks({
	decks,
	setDecks,
	selectedDecks,
	setMakingSelection,
}) {
	if (!selectedDecks) {
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
	setMakingSelection(() => false);
}

export default function CustomPractice({
	selectedDecks,
	setSelectedDecks,
	decks,
	setDecks,
	setMakingSelection,
}) {
	return (
		<>
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
					findSelectedDecks({
						decks,
						setDecks,
						selectedDecks,
						setMakingSelection,
					});

					// redirect to actual practice
					// history.push('/practice');
				}}
			>
				Start Practice
			</Button>
		</>
	);
}

CustomPractice.propTypes = {
	selectedDecks: PropTypes.objectOf(PropTypes.string),
	setSelectedDecks: PropTypes.func,
	decks: PropTypes.arrayOf(PropTypes.object),
	setDecks: PropTypes.func,
	setMakingSelection: PropTypes.func,
};

CustomPractice.defaultProps = {
	selectedDecks: {},
	setSelectedDecks: () => {},
	decks: [{}],
	setDecks: () => {},
	setMakingSelection: () => {},
};
