import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const ViewDecksDiv = styled.div`
	height: 100%;
	width: 100%;
	max-width: 320px;

	display: flex;
	flex-wrap: wrap;
	cursor: pointer;
	overflow-x: auto;
	position: relative;
`;

const FormButtonsDiv = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const NewDeckForm = styled.form`
	width: 100%;
`;

const useStyles = makeStyles({
	root: {
		'width': 140,
		'margin': '0.25rem',
		'&:hover': {
			background: 'rgb(252,193,6)',
		},
	},
	newDeckForm: {
		position: 'fixed',
		width: '320px',
		height: '300px',
		top: '200px',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	button: {
		'padding': '20px',
		'font-size': '60rem',
	},
});

export { ViewDecksDiv, useStyles, FormButtonsDiv, NewDeckForm };
