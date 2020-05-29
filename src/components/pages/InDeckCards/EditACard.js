import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ReactCardFlip from 'react-card-flip';
import fetchData from '../../../utils/fetchData/fetchData';
import CardEditor from '../../cards/CardEditor';
import { ButtonsDiv } from '../../ButtonsDiv/ButtonsDiv';

function submitAndReturn({
	editingCard,
	frontMarkup,
	backMarkup /*  setErrorState, */,
}) {
	const payload = {
		front_text: frontMarkup,
		front_image: '',
		back_text: backMarkup,
		back_image: '',
		important: editingCard.important,
		color: editingCard.color,
	};

	fetchData('PUT', `cards${editingCard.id}`, {
		body: payload,
	})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log('error', err);
		});
}
// post request, wait for ok
// then useDeckCards({setCards, viewingDeck})
// then setUserActivity('browsing)
// catch error and set error state

export default function EditACard({ setUserActivity, editingCard }) {
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
					// className={classes.button}
					onClick={() => {
						submitAndReturn({
							editingCard,
							frontMarkup,
							backMarkup,
							setErrorState,
						});
					}}
				>
					Save
				</Button>
			</ButtonsDiv>
		</>
	);
}

// server.put('/cards/:card_id', auth, updateCard);
/*
			front_text: req.body.front_text,
			front_image: req.body.front_image,
			back_text: req.body.back_text,
			back_image: req.body.back_image,
			important: req.body.important,
			color: req.body.color,
*/

EditACard.propTypes = {
	setUserActivity: PropTypes.func.isRequired,
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
