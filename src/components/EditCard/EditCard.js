import React from 'react';
import ReactQuill from 'react-quill';
import Card from '@material-ui/core/Card';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		width: 300,
		height: 200,
	},
	quill: {
		height: '100%',
		backgroundColor: 'rgb(240,107,37)',
	},
}));

// modules is an optional config object.
const modules = {
	toolbar: [
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			{ indent: '-1' },
			{ indent: '+1' },
		],
		['link', 'image'],
	],
};

export default function CardEditor({ markup, setMarkup, key }) {
	const classes = useStyles();
	console.log(markup);
	return (
		<Card
			className={classes.root}
			// style={{ backgroundColor: 'rgb(240,107,37)' }}
		>
			<ReactQuill
				className={classes.quill}
				container={key}
				theme="snow"
				value={markup}
				onChange={setMarkup}
				modules={modules}
				// style={{ backgroundColor: 'black' }}
			/>
		</Card>
	);
}

CardEditor.propTypes = {
	markup: PropTypes.string.isRequired,
	setMarkup: PropTypes.func.isRequired,
	key: PropTypes.string,
};

CardEditor.defaultProps = {
	key: 'unique-keys-are-required-for-multiplpe-editors',
};
