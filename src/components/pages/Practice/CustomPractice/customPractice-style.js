import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const CustomPracticeDiv = styled.div`
	min-height: 40vh;
	width: 100%;
`;

const ButtonsDiv = styled.div`
	display: flex;
`;

const TimerDiv = styled.div`
	display: flex;
	align-items: center;
`;

const PracticePageText = styled.p`
	font-size: 1rem;
	text-align:
	padding: 0.2rem;
	back
`;

const FlashMessageDiv = styled.div`
	height: 1rem;
	margin: 0.5rem;
`;

const useStyles = makeStyles((theme) => ({
	startButton: {
		position: 'fixed',
		bottom: '10px',
		[theme.breakpoints.up('md')]: {
			bottom: '100px',
		},
	},
	timerInput: {
		'width': '8ch',
		'& input': {
			padding: '0.6rem',
			textAlign: 'center',
		},
	},
	cardButton: {
		fontSize: '0.7rem',
		margin: '0.2rem',
	},
	flashMessage: {
		color: 'red',
	},
}));

export {
	CustomPracticeDiv,
	ButtonsDiv,
	TimerDiv,
	PracticePageText,
	FlashMessageDiv,
	useStyles,
};
