import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const ViewDecksDiv = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	justify-content: space-between;
	overflow-y: auto;
	height: 50vh;
`;

const useStyles = makeStyles(() => ({
	root: {
		width: 150,
		marginLeft: '0px',
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
		padding: 0,
		// visibility: 'hidden',
		position: 'absolute',
	},

	checked: {
		// backgroundColor: 'rgb(252,193,6)',
		// // height: '73px',
		// border: '1px solid rgb(64,84,181)',
	},
	checkboxParent: {
		margin: 0,
		marginTop: '0.5rem',
		position: 'relative',
	},
}));

export { ViewDecksDiv, useStyles };
