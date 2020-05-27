import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import fetchData from '../../../utils/fetchData/fetchData';
import ViewDecks from '../../viewDecks/viewDecks';
// import useYourDecks from '../../../hooks/useYourDecks';

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

const PublicDecksDiv = styled.div``;

export default function PublicDecks() {
	const classes = useStyles();
	const history = useHistory();
	const [publicDecks, setPublicDecks] = React.useState([]);
	const [selectedDecks, setSelectedDecks] = React.useState([]);
	const [usersDecks, setUsersDecks] = React.useState([]);
	/* We need to know which decks the user currently has in their collection so we can set the right values in selectedDecks and thereby tick the right boxes in ViewDecks. We load this data elsewhere. Where? App? */

	useEffect(() => {
		// async function
		async function getStuff() {
			const privDecks = await fetchData('GET', `decks`);
			setUsersDecks(privDecks.map((d) => d.deck_id));
			const pubDecks = await fetchData('GET', `public-decks`);
			setPublicDecks(pubDecks);
			// console.log("PUBLIC DECK LIST:", pubDecks);
			// console.log("PERSONAL DECK LIST:", privDecks);
		}
		getStuff();
	}, []);

	useEffect(() => {
		const selDecks = {};
		publicDecks.forEach((deck) => {
			selDecks[deck.deck_id] = true;
		});
		setSelectedDecks(selDecks);
	}, [publicDecks]);
	/*
{
	1: false,
	2: true
}

*/

	return (
		<PublicDecksDiv>
			Public decks list...
			<pre>PUBLIC DECKS: {JSON.stringify(publicDecks)}</pre>
			<br />
			<pre>USERS DECKS: {JSON.stringify(usersDecks)}</pre>
			<br />
			<ViewDecks
				selectedDecks={selectedDecks} // { id: bool, id: bool }
				setSelectedDecks={setSelectedDecks}
				decks={publicDecks}
				setDecks={() => {}} // full object
			/>
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
				Save
			</Button>
		</PublicDecksDiv>
	);
}
