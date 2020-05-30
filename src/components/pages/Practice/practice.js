import React from 'react';
import CustomPractice from './CustomPractice/customPractice';
import PracticeCard from './practiceCard/practiceCard';
import useYourDecks from '../../../hooks/useYourDecks';
import FinishPractice from './FinishPractice/finishedPractice';

export default function Practice() {
	const [selectedDecks, setSelectedDecks] = React.useState({});
	const [decks, setDecks] = React.useState(null);
	const [practiceStage, setPracticeStage] = React.useState('customPractice');
	const [timer, setTimer] = React.useState(5);
	useYourDecks({ setDecks, setSelectedDecks });

	if (practiceStage === 'customPractice') {
		return (
			<CustomPractice
				selectedDecks={selectedDecks}
				setSelectedDecks={setSelectedDecks}
				decks={decks}
				setDecks={setDecks}
				practiceStage={practiceStage}
				setPracticeStage={setPracticeStage}
				timer={timer}
				setTimer={setTimer}
			/>
		);
	}

	if (practiceStage === 'practice') {
		return (
			<PracticeCard
				decksToPractice={decks}
				setPracticeStage={setPracticeStage}
				timer={timer}
			/>
		);
	}

	if (practiceStage === 'finishedPractice') {
		return <FinishPractice setPracticeStage={setPracticeStage} />;
	}
}
