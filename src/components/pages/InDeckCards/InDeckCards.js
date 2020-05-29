import React from 'react';
import Button from '@material-ui/core/Button';
// import AddANewCard from './AddANewCard';
import PropTypes from 'prop-types';
import {
	useStyles,
	EditCardsWrapper,
	CardWrapper,
	HrBreak,
	PageHeader,
} from './InDeckCards-style';
// when the user leaves this page (depending on how they leave it, i.e. not for editing a card), setViewingDeck to false
import useDeckCards from '../../../hooks/useDeckCards';
import BackButton from '../../BackButton/BackButon';
import CardViewer from './CardViewer';
import EditACard from './EditACard';
import AddANewCard from './AddANewCard';
import { ButtonsDiv } from '../../ButtonsDiv/ButtonsDiv';

export default function InDeckCards({ viewingDeck }) {
	const [cards, setCards] = React.useState(null);
	const [editingCard, setEditingCard] = React.useState(null);
	const [errorState, setErrorState] = React.useState(false);
	const [userActivity, setUserActivity] = React.useState('browsing');

	React.useEffect(() => {
		setUserActivity('browsing');
	}, []);

	useDeckCards({ setCards, viewingDeck, setErrorState }); // useEffect wrapper

	const goToEdit = (card) => {
		setEditingCard(() => card);
		setUserActivity(() => 'editing');
	};

	const classes = useStyles();

	if (errorState) {
		return errorState;
	}
	if (!cards) {
		return 'Loading...';
	}
	if (userActivity === 'browsing') {
		return (
			<EditCardsWrapper>
				<PageHeader>Click on a card to edit</PageHeader>
				{cards.map((card) => {
					return (
						// eslint-disable-next-line jsx-a11y/no-static-element-interactions

						<CardWrapper
							onClick={() => goToEdit(card)}
							onKeyPress={(e) =>
								e.keyCode === 13 && goToEdit(card)
							}
						>
							<HrBreak />
							<h4>Card</h4>
							<CardViewer card={card} />
						</CardWrapper>
					);
				})}

				<ButtonsDiv>
					<BackButton to="your-decks" />
					<Button
						// type="submit"
						variant="contained"
						className={classes.startButton}
						color="primary"
						onClick={() => {
							setUserActivity('adding');
						}}
					>
						Add new
					</Button>
				</ButtonsDiv>
			</EditCardsWrapper>
		);
	}
	if (userActivity === 'editing') {
		return (
			<EditACard
				setUserActivity={setUserActivity}
				editingCard={editingCard}
				setCards={setCards}
				viewingDeck={viewingDeck}
			/>
		);
	}
	if (userActivity === 'adding') {
		return <AddANewCard viewingDeck={viewingDeck} />;
	}
}

InDeckCards.propTypes = {
	viewingDeck: PropTypes.number.isRequired,
	setViewingDeck: PropTypes.func.isRequired,
};
