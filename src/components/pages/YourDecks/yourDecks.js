import React from 'react';
import ViewDecks from '../../viewDecks/viewDecks';
import useYourDecks from '../../../hooks/useYourDecks';

export default function MyDecks() {
	const [decks, setDecks] = React.useState(null);
	const [selectedDecks, setSelectedDecks] = React.useState({});
	useYourDecks({ setDecks, setSelectedDecks });

	return (
		<ViewDecks
			selectedDecks={selectedDecks}
			setSelectedDecks={setSelectedDecks}
			decks={decks}
			setDecks={setDecks}
		/>
	);
}
