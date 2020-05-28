import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const ViewDecksDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	overflow-y: auto;
`;

const useStyles = makeStyles(() => ({
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
	checkboxClass: {
		paddingRight: '0.2rem',
	},
	card: {
		width: '100px',
		height: '75px',
		marginTop: '1rem',
		marginLeft: '0rem',
	},
	checked: {
		opacity: '0.8',
		width: '98px',
		height: '73px',
		border: '1px solid rgb(64,84,181)',
	},
}));

export { ViewDecksDiv, useStyles };
