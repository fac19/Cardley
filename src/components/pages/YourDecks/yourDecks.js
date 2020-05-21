import React from 'react';
import styled from 'styled-components';
import getFetch from '../../../utils/fetchData/get-fetch';

const YourDecksDiv = styled.div``;

export default function YourDecks() {
	const [decks, setDecks] = React.useState(null);
	React.useEffect(() => {
		const fetchObj = {
			endpoint: 'decks',
			errorMessage: 'could not get your decks',
			authRequired: true,
		};
		getFetch(fetchObj).then((res) => {
			setDecks(res);
			// console.log(res, typeof res)
			// // setDecks(JSON.parse(res))
		});
	}, []);

	return (
		<YourDecksDiv>
			<h2>Your Decks</h2>
			{decks ? (
				decks.map((deck) => <p>{deck.deck_name}</p>)
			) : (
				<h3>This is where your decks will appear...</h3>
			)}
		</YourDecksDiv>
	);
}
