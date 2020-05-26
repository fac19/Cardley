import React from 'react';
import getFetch from '../utils/fetchData/get-fetch';

export default function useYourDecks({ setDecks, setSelectedDecks }) {
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
	}, [setDecks, setSelectedDecks]);
}
