import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const FormElem = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const EditCardsWrapper = styled.div`
	max-height: 600px;
	// @media (min-width: 600px) {
	// 	margin-top: 200px;
	// }
`;

const CardWrapper = styled.div`
	margin-top: 1rem;
	cursor: pointer;
`;

const HrBreak = styled.hr`
	margin-top: 1rem;
	border: 0;
	height: 0; /* Firefox... */
	box-shadow: 0 0 10px 1px black;
`;

const PageHeader = styled.h3`
	position: fixed;
	top: 0;
	padding-top: 50px;
	background-color:
	display: flex;
	margin-left: -10px;
	width: 100%;
	max-width: 325px;
	justify-content: space-around;
	align-items: center;
	background-color: rgb(250, 250, 250);
`;

const useStyles = makeStyles(() => ({
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
		// position: 'fixed',
		// width: '100%',
		// maxWidth: 300,
		// bottom: '10px',
		// [theme.breakpoints.up('md')]: {
		// 	bottom: '100px',
		// },
	},
}));

export {
	useStyles,
	FormElem,
	EditCardsWrapper,
	CardWrapper,
	HrBreak,
	PageHeader,
};
