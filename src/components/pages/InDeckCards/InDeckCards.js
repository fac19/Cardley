import React from 'react';
import Button from '@material-ui/core/Button';
import fetchData from '../../../utils/fetchData/fetchData';
import CardViewer from './CardViewer';
import EditCard from '../../EditCard/EditCard';
// when the user leaves this page (depending on how they leave it, i.e. not for editing a card), setViewingDeck to false

import BackButton from '../../BackButton/BackButon';

export default function InDeckCards({ viewingDeck }) {
	const [cards, setCards] = React.useState(null);
	const [frontMarkup, setFrontMarkup] = React.useState('');
	const [backMarkup, setBackMarkup] = React.useState('');

	React.useEffect(() => {
		fetchData('GET', `cards/deck/${viewingDeck}`).then((res) => {
			setCards(res);
		});
	}, [viewingDeck]);

	if (cards) {
		return (
			<div>
				<BackButton to="your-decks" />
				{cards.map((card) => {
					return <CardViewer card={card} />;
				})}
				<form>
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
						fullWidth
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
				</form>
			</div>
		);
	}
	return 'Loading...';
}
