import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import getFetch from '../../../../utils/fetchData/get-fetch';

import ViewDecks from '../../../viewDecks/viewDecks';

const CustomPracticeDiv = styled.div``;

function findSelectedDecks({ decks, setDecks, selectedDecks }) {
	const lookupTerms = [];
	Object.entries(selectedDecks).map((deck) => {
		console.log(deck);
		if (deck[1] === true) {
			lookupTerms.push(deck[0]);
		}
	});
	const subsetOfDecks = decks.filter((deck) => {
		return lookupTerms.includes(deck.deck_id);
	});
	setDecks(subsetOfDecks);
}

export default function CustomPractice({
	selectedDecks,
	setSelectedDecks,
	decks,
	setDecks,
}) {
	const history = useHistory();

	// console.log('CustomPractice -> setSelectedDecks', setSelectedDecks);
	console.log('CustomPractice -> selectedDecks', selectedDecks);
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
					findSelectedDecks({ decks, setDecks, selectedDecks });
					// redirect to actual practice
					history.push('/practice');
				}}
			>
				Start Practice
			</Button>
		</>
	);
}
