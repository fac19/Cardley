import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import useDeckCards from '../../../hooks/useDeckCards';
import fetchData from '../../../utils/fetchData/fetchData';
import CardEditor from '../../cards/CardEditor';

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
	console.log(editingCard);
	const [frontMarkup, setFrontMarkup] = React.useState(
		editingCard.front_text,
	);
	const [backMarkup, setBackMarkup] = React.useState(editingCard.back_text);
	const [, setErrorState] = React.useState(null);

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
					});
				}}
			>
				Save and return
			</Button>
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
