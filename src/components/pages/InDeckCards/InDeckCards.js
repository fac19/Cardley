import React from 'react';
import fetchData from '../../../utils/fetchData/fetchData';
import CardViewer from './CardViewer';

export default function InDeckCards({ viewingDeck }) {
	const [cards, setCards] = React.useState(null);

	React.useEffect(() => {
		fetchData('GET', `cards/deck/${viewingDeck}`).then((res) => {
			setCards(res);
		});
	}, [viewingDeck]);

	if (cards) {
		return (
			<div>
				{cards.map((card) => {
					return <CardViewer card={card} />;
				})}
			</div>
		);
	}
	return 'Loading...';
}
