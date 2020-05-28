import React from 'react';
import PropTypes from 'prop-types';
import CardFace from '../../cards/cardFace';

export default function CardViewer({ card }) {
	// const {card_id, deck_id, front_text, front_image, back_text, back_image, important, color } = card
	// return front_text
	return (
		<>
			<CardFace
				deckname={card.deck_id}
				content={card.front_text}
				color={card.color}
			/>
			<CardFace
				deckname={card.deck_id}
				content={card.back_text}
				color={card.color}
			/>
		</>
	);
}

CardViewer.propTypes = {
	card: PropTypes.shape({
		deck_id: PropTypes.number.isRequired,
		front_text: PropTypes.string.isRequired,
		back_text: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}).isRequired,
};

/*
{
	"card_id": 3,
	"deck_id": 2,
	"front_text": "What are the parameters to fetch?",
	"front_image": null,
	"back_text": "1. The path to the resource you want\\n2.An options/init object.",
	"back_image": null,
	"important": false,
	"color": "rgb(174,232,143)"
  }
  */
