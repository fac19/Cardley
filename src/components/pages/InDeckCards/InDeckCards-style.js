import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const FormElem = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const EditCardsWrapper = styled.div`
	margin-top: 50pxx @media (min-width: 600px) {
		margin-top: 200px;
	}
`;

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
		height: 300,
	},
	button: {
		width: '80%',
		maxWidth: 300,
		marginTop: '3rem',
	},
	startButton: {
		position: 'fixed',
		bottom: '10px',
		[theme.breakpoints.up('md')]: {
			bottom: '100px',
		},
	},
}));

export { useStyles, FormElem, EditCardsWrapper };
