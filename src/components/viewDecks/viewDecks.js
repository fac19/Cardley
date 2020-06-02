import React from 'react';
import PropTypes from 'prop-types';
import SelectableDeck from './selectableDeck';
import { ViewDecksDiv } from './viewDeck-style';

export default function ViewDecks({ selectedDecks, setSelectedDecks, decks }) {
	return (
		<ViewDecksDiv>
			{decks ? (
				decks.map((deck) => (
					<SelectableDeck
						decks={decks}
						deck={deck}
						selectedDecks={selectedDecks}
						setSelectedDecks={setSelectedDecks}
						key={deck.deck_name}
					/>
				))
			) : (
				<h3>This is where your decks will appear...</h3>
			)}
		</ViewDecksDiv>
	);
}

ViewDecks.propTypes = {
	selectedDecks: PropTypes.arrayOf(PropTypes.object).isRequired,
	setSelectedDecks: PropTypes.func.isRequired,
	decks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
