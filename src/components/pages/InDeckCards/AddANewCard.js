import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditCard from '../../cards/CardEditor';
import { useStyles, FormElem } from './InDeckCards-style';
import fetchData from '../../../utils/fetchData/fetchData';

export default function AddANewCard({ viewingDeck }) {
	// console.log('viewing deck is :', viewingDeck)
	const [frontMarkup, setFrontMarkup] = React.useState('');
	const [backMarkup, setBackMarkup] = React.useState('');
	const [submissionData, setSubmissionData] = React.useState(false);
	const classes = useStyles();
	const history = useHistory();

	React.useEffect(() => {
		if (!submissionData) return;

		// eslint-disable-next-line no-shadow
		const [viewingDeck, frontMarkup, backMarkup] = submissionData;

		const payload = {
			front_text: frontMarkup,
			front_image: '',
			back_text: backMarkup,
			back_image: '',
			important: false,
			color: 'rgb(174,232,143)',
		};
		// eslint-disable-next-line no-console
		console.log('OUR URL IS:', `cards/${viewingDeck}`);
		fetchData('POST', `cards/${viewingDeck}`, {
			body: payload,
		})
			.then(() => {
				history.push(`/your-decks`);
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log('error', err);
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [submissionData]);

	return (
		<FormElem>
			<h2>Add a new card:</h2>
			<h3>Front:</h3>
			<EditCard
				markup={frontMarkup}
				setMarkup={setFrontMarkup}
				key="hello"
			/>
			<h3>Back:</h3>
			<EditCard
				markup={backMarkup}
				setMarkup={setBackMarkup}
				key="goodbye"
			/>
			<Button
				// type="submit"
				className={classes.button}
				variant="contained"
				color="primary"
				// className={classes.button}
				onClick={() => {
					// send post request to server
					// update deck state on front end
					// event.preventDefault();
					setFrontMarkup(frontMarkup);
					setBackMarkup(backMarkup);

					setSubmissionData([viewingDeck, frontMarkup, backMarkup]);
				}}
			>
				Add
			</Button>
		</FormElem>
	);
}

AddANewCard.propTypes = {
	viewingDeck: PropTypes.number.isRequired,
};
