/* eslint-disable no-inner-declarations */
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
	const [publicDeckIds, setPublicDeckIds] = React.useState([]);
	const [selectedDecks, setSelectedDecks] = React.useState([]);
	const [usersDecks, setUsersDecks] = React.useState([]);
	const [saveChanges, setSaveChanges] = React.useState([]);

	useEffect(() => {
		// async function
		async function doStuff() {
			const privDecks = await fetchData('GET', `decks`);
			const usrsDecks = privDecks.map((d) => d.deck_id);
			const pubDecks = await fetchData('GET', `public-decks`);
			const pubDeckIds = pubDecks.map((d) => d.deck_id);
			const selDecks = {};
			pubDecks.forEach((deck) => {
				selDecks[deck.deck_id] = usrsDecks.includes(deck.deck_id);
			});
			setUsersDecks(usrsDecks);
			setPublicDecks(pubDecks);
			setPublicDeckIds(pubDeckIds);
			setSelectedDecks(selDecks);
		}
		doStuff();
	}, []);

	useEffect(() => {
		if (saveChanges.length > 1) {
			async function doStuff() {
				console.log('Save changes to API');
				const [toAdd, toDel] = saveChanges;
				console.log(toAdd.length, 'decks to add to users collection');
				console.log(
					toDel.length,
					'decks to remove from the users collection',
				);

				// Run the API queries for each addition / deletion
				// API could be improved so that these calls could
				// be batched together instead of making one call
				// per insertion / deletion.

				toAdd.forEach(async (deck) => {
					await fetchData(
						'POST',
						`decks/add-public/${deck}`,
					).catch(() => console.log('Could not add card'));
				});

				if (toDel.length > 0) {
					// Might be nice to have some sort of modal confirm
					// dialog here as, although the user can re-add the
					// deck at any time, they are about to delete their
					// decks personal ordering.
				}
				toDel.forEach(async (deck) => {
					await fetchData('DELETE', `decks/remove-public/${deck}`);
				});
			}
			doStuff();
			// React go back
			history.pop();
			//     history.push('/create-deck');
		}
	}, [saveChanges]);

	return (
		<PublicDecksDiv>
			<span>
				Add or remove these publicly shared decks from your
				collection...
			</span>

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
					const ticked = publicDeckIds.filter(
						(d) => selectedDecks[d],
					);

					const unTicked = publicDeckIds.filter(
						(d) => !selectedDecks[d],
					);

					// Are there any ids ticked that aren't already
					// part of the users collection?
					const toAdd = ticked.filter((d) => !usersDecks.includes(d));

					// Are there any decks in the uses collection
					//  which are now unticked?
					const toDel = usersDecks.filter((d) =>
						unTicked.includes(d),
					);

					// If for any reason we don't leave the page next we need
					// to either update usersDecks or fetch it again
					setSaveChanges([toAdd, toDel]);
				}}
			>
				Done
			</Button>
		</PublicDecksDiv>
	);
}
