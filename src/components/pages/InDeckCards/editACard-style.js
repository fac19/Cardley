import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const FlashMessageDiv = styled.div`
	height: 1rem;
	margin: 0.5rem;
`;

const useStyles = makeStyles(() => ({
	flashMessage: {
		color: 'red',
	},
}));

export { FlashMessageDiv, useStyles };
