import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const ViewDecksDiv = styled.div``;

const useStyles = makeStyles({
	root: {
		width: 150,
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
	card: {
		width: '150px',
		height: '75px',
		margin: '1rem',
	},
	button: {
		'padding': '20px',
		'font-size': '60rem',
	},
});

export { ViewDecksDiv, useStyles };
