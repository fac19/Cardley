import React from 'react';
import PropTypes from 'prop-types';

import ClickableDeck from './clickableDeck';
import { ViewDecksDiv } from './Deck-style';

export default function ViewDecksLinks({ decks, setViewingDeck }) {
	return (
		<ViewDecksDiv>
			{decks ? (
				decks.map((deck) => (
					<ClickableDeck
						deck={deck}
						setViewingDeck={setViewingDeck}
					/>
				))
			) : (
				<h3>This is where your decks will appear...</h3>
			)}
		</ViewDecksDiv>
	);
}

ViewDecksLinks.propTypes = {
	decks: PropTypes.arrayOf(PropTypes.object),
	setViewingDeck: PropTypes.func.isRequired,
};

ViewDecksLinks.defaultProps = {
	decks: [{}],
};
