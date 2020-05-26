import React from 'react';
import getFetch from '../../../utils/fetchData/get-fetch';
import CustomPractice from './CustomPractice/customPractice';

export default function Practice() {
	const [selectedDecks, setSelectedDecks] = React.useState(null);
	const [decks, setDecks] = React.useState(null);

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
					returnObj[deck.deck_id] = false;
					return returnObj;
				}, {}),
			);
		});
	}, []);
	return (
		<CustomPractice
			selectedDecks={selectedDecks}
			setSelectedDecks={setSelectedDecks}
			decks={decks}
			setDecks={decks}
		/>
	);
}
