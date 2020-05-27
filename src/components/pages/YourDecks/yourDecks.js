import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ViewDecksLinks from './ViewDecksLinks';
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
}));

export default function MyDecks() {
	const classes = useStyles();
	const [decks, setDecks] = React.useState(null);
	const [, setSelectedDecks] = React.useState({});
	useYourDecks({ setDecks, setSelectedDecks });
	const history = useHistory();

	return (
		<>
			<ViewDecksLinks decks={decks} />

			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
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
				className={classes.submit}
				onClick={() => {
					history.push('/public-decks');
				}}
			>
				Public Decks
			</Button>
		</>
	);
}
