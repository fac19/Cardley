import React from 'react';
import getFetch from '../../../utils/fetchData/get-fetch';
import CustomPractice from './CustomPractice/customPractice';
import PracticeCard from './practiceCard/practiceCard';

export default function Practice() {
	const [selectedDecks, setSelectedDecks] = React.useState(null);
	const [decks, setDecks] = React.useState(null);
	const [makingSelection, setMakingSelection] = React.useState(true);

	React.useEffect(() => {
		const fetchObj = {
			endpoint: 'decks',
			errorMessage: 'could not get your decks',
			authRequired: true,
		};
		getFetch(fetchObj).then((res) => {
			setDecks(res);
			setSelectedDecks(
				res.reduce((returnObj, deck) => {
					const newObj = { ...returnObj };
					newObj[deck.deck_id] = false;
					return newObj;
				}, {}),
			);
		});
	}, []);

	const thingToRender = makingSelection ? (
		<CustomPractice
			selectedDecks={selectedDecks}
			setSelectedDecks={setSelectedDecks}
			decks={decks}
			setDecks={setDecks}
			setMakingSelection={setMakingSelection}
		/>
	) : (
		<PracticeCard decksToPractice={decks} />
	);

	return thingToRender;
}
