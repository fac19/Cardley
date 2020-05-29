import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ViewDecksLinks from './children/ViewDecksLinks';
import useYourDecks from '../../../hooks/useYourDecks';
import { useStyles, YourDecksHeader } from './yourDecks-style';
import { ButtonsDiv } from '../../ButtonsDiv/ButtonsDiv';

export default function MyDecks({ setViewingDeck }) {
	const classes = useStyles();
	const history = useHistory();
	const [decks, setDecks] = React.useState(null);
	const [, setSelectedDecks] = React.useState({});
	useYourDecks({ setDecks, setSelectedDecks });

	return (
		<>
			<YourDecksHeader>Select deck you wish to Edit </YourDecksHeader>
			<ViewDecksLinks decks={decks} setViewingDeck={setViewingDeck} />

			<ButtonsDiv>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={() => {
						history.push('/create-deck');
					}}
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
