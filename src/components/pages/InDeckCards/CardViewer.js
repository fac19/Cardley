// import React from 'react'

export default function CardViewer({ card }) {
	// const {card_id, deck_id, front_text, front_image, back_text, back_image, important, color } = card
	// return front_text
	return card.front_text;
}

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
