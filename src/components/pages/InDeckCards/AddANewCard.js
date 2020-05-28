import React from 'react';
import Button from '@material-ui/core/Button';
import EditCard from '../../cards/CardEditor';
import { useStyles, FormElem } from './InDeckCards-style';
// import fetchData from '../../../utils/fetchData/fetchData'

export default function AddANewCard(/* viewingDeck */) {
	const [frontMarkup, setFrontMarkup] = React.useState('');
	const [backMarkup, setBackMarkup] = React.useState('');
	const classes = useStyles();

	// function saveNewCard() {
	//     fetchData('GET', `cards/deck/${viewingDeck}`,
	//     { front_text: frontMarkup, front_image: undefined, back_text: backMarkup, back_image: undefined, important: false, color: 'rgb(174,232,143)' })
	//     .then((res) => {
	// 		console.log('card created', res);
	// 	});
	// }

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
				type="submit"
				className={classes.button}
				variant="contained"
				color="primary"
				// className={classes.button}
				onClick={() => {
					// send post request to server
					// update deck state on front end
					setFrontMarkup('');
					setBackMarkup('');
				}}
			>
				Add
			</Button>
		</FormElem>
	);
}
