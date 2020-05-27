import React from 'react';
import CustomPractice from './CustomPractice/customPractice';
import PracticeCard from './practiceCard/practiceCard';
import useYourDecks from '../../../hooks/useYourDecks';

export default function Practice() {
	const [selectedDecks, setSelectedDecks] = React.useState({});
	const [decks, setDecks] = React.useState(null);
	const [makingSelection, setMakingSelection] = React.useState(true); // don't use boolean use some value e.g. string which can represent three possibilities, choosing, revising, and paused for celebrations with option to stop revising or keep revising.
	const [timer, setTimer] = React.useState(5);
	useYourDecks({ setDecks, setSelectedDecks });

	// if (makingSelection === true) {
	// 	return ()
	// } else if () {

	// } else {

	// }

	const thingToRender = makingSelection ? (
		<CustomPractice
			selectedDecks={selectedDecks}
			setSelectedDecks={setSelectedDecks}
			decks={decks}
			setDecks={setDecks}
			setMakingSelection={setMakingSelection}
			timer={timer}
			setTimer={setTimer}
		/>
	) : (
		<PracticeCard decksToPractice={decks} />
	);

	return thingToRender;
}
