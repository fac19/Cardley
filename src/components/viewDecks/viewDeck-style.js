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
		// paddingRight: '0.2rem',
		// position: 'absolute',
		// bottom: '-10px',
		// left: '-12px',
		// [theme.breakpoints.up('md')]: {
		// 	bottom: '0px',
		// 	left: '-12px',
		// },
	},
	card: {
		width: '110px',
		height: '75px',
		marginTop: '1rem',
		marginLeft: '0rem',
	},
	checked: {
		opacity: '0.8',
		// width: '118px',
		// height: '73px',
		// border: '1px solid rgb(64,84,181)',
	},
	checkboxParent: {
		marginLeft: '0px',
	},
}));

export { ViewDecksDiv, useStyles };
