import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './cards-styles';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

export default function CardFace({ deckname, content, color }) {
	const contentJSX = htmlToReactParser.parse(content);
	const classes = useStyles();

	return (
		<Card className={classes.root} style={{ backgroundColor: color }}>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					{deckname}
				</Typography>

				<Typography variant="body1" component="p">
					{contentJSX}
				</Typography>
			</CardContent>
		</Card>
	);
}

// Question: do we want to hand down class as a prop as we are doing now?

CardFace.propTypes = {
	deckname: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};
