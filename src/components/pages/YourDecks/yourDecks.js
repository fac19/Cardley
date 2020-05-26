import React from 'react';
import ViewDecks from '../../viewDecks/viewDecks';

export default function MyDecks() {
	const [myState, setMyState] = React.useState(null);

	return (
		<ViewDecks
		// selectedDecks={selectedDecks}
		// setSelectedDecks={setSelectedDecks}
		/>
	);
}
