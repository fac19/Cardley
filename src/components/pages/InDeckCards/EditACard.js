import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ReactCardFlip from 'react-card-flip';
import fetchData from '../../../utils/fetchData/fetchData';
import CardEditor from '../../cards/CardEditor';
import { ButtonsDiv } from '../../ButtonsDiv/ButtonsDiv';
// import FlashMessage from 'react-flash-message';
// import { FlashMessageDiv, useStyles } from './editACard-style';

function submitAndReturn({
	editingCard,
	frontMarkup,
	backMarkup,
	setErrorState,
	setUserActivity,
}) {
	const payload = {
		front_text: frontMarkup,
		front_image: '',
		back_text: backMarkup,
		back_image: '',
		important: editingCard.important,
		color: editingCard.color,
	};

	fetchData('PUT', `cards/${editingCard.card_id}`, {
		body: payload,
	})
		.then((res) => {
			if (res.updated === true) {
				// useDeckCards({ setDeckCards, viewingDeck, setErrorState });
				setUserActivity(() => 'browsing');
				// console.log(res);
			} else {
				throw new Error('Could not add your card to the database');
			}
		})
		.catch((err) => {
			setErrorState(String(err));
			console.log('error', err);
		});
}

export default function EditACard({
	setUserActivity,
	editingCard,
	setCards,
	viewingDeck,
}) {
	const [frontMarkup, setFrontMarkup] = React.useState(
		editingCard.front_text,
	);
	const [backMarkup, setBackMarkup] = React.useState(editingCard.back_text);
	const [, setErrorState] = React.useState(null);
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
				<>
					<h3>Front:</h3>
					<CardEditor
						markup={frontMarkup}
						setMarkup={setFrontMarkup}
						key="front"
					/>
				</>
				<>
					<h3>Back:</h3>
					<CardEditor
						markup={backMarkup}
						setMarkup={setBackMarkup}
						key="back"
					/>
				</>
			</ReactCardFlip>
			{/* <CardEditor
				markup={frontMarkup}
				setMarkup={setFrontMarkup}
				key="front"
			/>
			<CardEditor
				markup={backMarkup}
				setMarkup={setBackMarkup}
				key="back"
			/> */}

			<ButtonsDiv>
				<Button
					variant="contained"
					color="primary"
					// className={classes.button}
					onClick={() => {
						setFrontMarkup('');
						setBackMarkup('');
						setUserActivity('browsing');
					}}
				>
					Discard
				</Button>
				<Button
					// className={classes.cardButton}
					variant="contained"
					color="primary"
					onClick={() => setIsFlipped(!isFlipped)}
				>
					Flip
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						submitAndReturn({
							editingCard,
							frontMarkup,
							backMarkup,
							setErrorState,
							setUserActivity,
							setCards,
							viewingDeck,
						});
					}}
				>
					Save
				</Button>
			</ButtonsDiv>
		</>
	);
}

EditACard.propTypes = {
	setUserActivity: PropTypes.func.isRequired,
	setCards: PropTypes.func.isRequired,
	viewingDeck: PropTypes.number.isRequired,
	editingCard: PropTypes.shape({
		card_id: PropTypes.number.isRequired,
		deck_id: PropTypes.number.isRequired,
		front_text: PropTypes.string.isRequired,
		front_image: PropTypes.string.isRequired,
		back_text: PropTypes.string.isRequired,
		back_image: PropTypes.string.isRequired,
		important: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
	}).isRequired,
};
