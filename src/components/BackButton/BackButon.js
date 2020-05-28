import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function BackButton({ to }) {
	const history = useHistory();
	return (
		<Button
			fullWidth
			variant="contained"
			color="primary"
			// className={classes.button}
			onClick={() => {
				history.push(`/${to}`);
			}}
		>
			Back
		</Button>
	);
}

BackButton.propTypes = {
	to: PropTypes.string,
};

BackButton.defaultProps = {
	to: '', // home
};
