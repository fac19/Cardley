import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const FormElem = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
}));

export { useStyles, FormElem };
