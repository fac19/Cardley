import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const TimerContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
`;

const TimerDivP = styled.p`
	font-size: 1rem;
	padding: 0.2rem;
`;

const CustomPracticeDiv = styled.div`
	min-height: 40vh;
	width: 100%;
	padding-left: 1rem;
`;

const ButtonsDiv = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 10px;
	margin-left: -10px;
	max-width: 325px;
	justify-content: space-between;
`;

const TimerDiv = styled.div`
	display: flex;
	align-items: center;
`;

const PracticePageText = styled.p`
	font-size: 1rem;
	text-align:
	padding: 0.2rem;
`;

const FlashMessageDiv = styled.div`
	height: 1rem;
	margin: 0.5rem;
`;

const useStyles = makeStyles((theme) => ({
	startButton: {
		position: 'fixed',
		bottom: '10px',
		padding: '1rem',
		marginRight: '1rem',
		width: '95%',
		[theme.breakpoints.up('md')]: {
			bottom: '100px',
			width: '290px',
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

// inline

const multiSelectButtons = {
	marginLeft: '0px',
	paddingBottom: 0,
	paddingLeft: '1rem',
	paddingRight: '1rem',
};

export {
	multiSelectButtons,
	CustomPracticeDiv,
	ButtonsDiv,
	TimerDiv,
	PracticePageText,
	FlashMessageDiv,
	TimerContainer,
	TimerDivP,
	useStyles,
};
