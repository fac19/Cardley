import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import fetchData from '../../../utils/fetchData/fetchData';
import CardEditor from '../../cards/CardEditor';

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
// post request, wait for ok
// then useDeckCards({setCards, viewingDeck})
// then setUserActivity('browsing)
// catch error and set error state

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
	const [errorState, setErrorState] = React.useState(null);

	if (errorState) {
		console.log(errorState);
	} // don't want to change return because user should see content - popup is better

	return (
		<>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				// className={classes.button}
				onClick={() => {
					setFrontMarkup('');
					setBackMarkup('');
					setUserActivity('browsing');
				}}
			>
				Discard and return
			</Button>
			<CardEditor
				markup={frontMarkup}
				setMarkup={setFrontMarkup}
				key="front"
			/>
			<CardEditor
				markup={backMarkup}
				setMarkup={setBackMarkup}
				key="back"
			/>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				// className={classes.button}
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
				Save and return
			</Button>
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
