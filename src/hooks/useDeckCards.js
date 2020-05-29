import React from 'react';
import fetchData from '../utils/fetchData/fetchData';

export default function useDeckCards({
	setCards,
	viewingDeck,
	setErrorState,
	userActivity,
}) {
	React.useEffect(() => {
		fetchData('GET', `cards/deck/${viewingDeck}`)
			.then((res) => {
				setErrorState(false);
				console.log('api returns cards: ', res);
				setCards(res);
			})
			.catch((error) => {
				setErrorState(String(error));
			});
	}, [viewingDeck, setCards, setErrorState, userActivity]);
}
