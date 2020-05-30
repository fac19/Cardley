import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ViewDecksLinks from './children/ViewDecksLinks';
import CreateDeckForm from './children/CreateDeckForm';
import useYourDecks from '../../../hooks/useYourDecks';
import { useStyles, YourDecksHeader } from './yourDecks-style';
import { ButtonsDiv } from '../../ButtonsDiv/ButtonsDiv';

export default function MyDecks({ setViewingDeck }) {
	const classes = useStyles();
	const history = useHistory();
	const [decks, setDecks] = React.useState(null);
	const [, setSelectedDecks] = React.useState({});
	useYourDecks({ setDecks, setSelectedDecks });

	const [deckCreate, setDeckCreate] = React.useState(false);

	function createDeckClickHandler(event) {
		setDeckCreate(true);
		// eslint-disable-next-line no-console
		console.log('target', event.target);
	}

	return (
		<>
			<YourDecksHeader>Click on a deck you wish to Edit</YourDecksHeader>
			<ViewDecksLinks decks={decks} setViewingDeck={setViewingDeck} />
			{deckCreate && <CreateDeckForm />}
			<ButtonsDiv>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={createDeckClickHandler}
				>
					Create Deck
				</Button>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={() => {
						history.push('/public-decks');
					}}
				>
					Public Decks
				</Button>
			</ButtonsDiv>
		</>
	);
}

MyDecks.propTypes = {
	setViewingDeck: PropTypes.func.isRequired,
};
