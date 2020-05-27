import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ViewDecksLinks from './children/ViewDecksLinks';
import useYourDecks from '../../../hooks/useYourDecks';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	button: {
		margin: '20px',
	},
}));

const ButtonsDiv = styled.div`
	display: flex;
`;

export default function MyDecks({ setViewingDeck }) {
	const classes = useStyles();
	const history = useHistory();
	const [decks, setDecks] = React.useState(null);
	const [, setSelectedDecks] = React.useState({});
	useYourDecks({ setDecks, setSelectedDecks });

	return (
		<>
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
