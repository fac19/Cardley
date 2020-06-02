import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import useYourDecks from '../../../../hooks/useYourDecks';

const FinishPracticeWrapper = styled.div`
	height: 100vh;
	width: 100vh;
	display: flex;
	flex-direction: column;

	align-items: center;
`;

const TextDiv = styled.div`
	margin: 10rem;
`;

export default function FinishPractice({
	setPracticeStage,
	setSelectedDecks,
	setDecks,
}) {
	const { width, height } = useWindowSize();

	useYourDecks({ setDecks, setSelectedDecks });
	return (
		<FinishPracticeWrapper>
			<Confetti width={width} height={height} />
			<TextDiv>Well done, you have finished your practice!</TextDiv>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					setPracticeStage('customPractice');
				}}
			>
				Practice
			</Button>
		</FinishPracticeWrapper>
	);
}

FinishPractice.propTypes = {
	setPracticeStage: PropTypes.func.isRequired,
	setSelectedDecks: PropTypes.func.isRequired,
	setDecks: PropTypes.func.isRequired,
};
