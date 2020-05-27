import React from 'react';
import fetchData from '../../../utils/fetchData/fetchData';
import CardViewer from './CardViewer';
import EditCard from '../../EditCard/EditCard';
// when the user leaves this page (depending on how they leave it, i.e. not for editing a card), setViewingDeck to false
export default function InDeckCards({ viewingDeck }) {
	const [cards, setCards] = React.useState(null);
	const [markup, setMarkup] = React.useState('');
	console.log(setMarkup);

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
				<form>
					<h2>Add a new card:</h2>
					<h3>Front:</h3>
					<EditCard markup={markup} setMarkup={setMarkup} />
				</form>
			</div>
		);
	}
	return 'Loading...';
}
