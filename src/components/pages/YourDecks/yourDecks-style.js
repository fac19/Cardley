import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

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

const YourDecksHeader = styled.h3``;

const ButtonsDiv = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
	@media (min-width: 600px) {
		bottom: 100px;
	}
`;

export { useStyles, ButtonsDiv, YourDecksHeader };
