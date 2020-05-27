import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';

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

export default function CardEditor({ markup, setMarkup }) {
	console.log(markup);
	return (
		<ReactQuill
			theme="snow"
			value={markup}
			onChange={setMarkup}
			modules={modules}
		/>
	);
}

CardEditor.propTypes = {
	markup: PropTypes.string.isRequired,
	setMarkup: PropTypes.func.isRequired,
};
