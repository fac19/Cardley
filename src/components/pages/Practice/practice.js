import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ReactCardFlip from 'react-card-flip';

const PracticeDiv = styled.div``;

const useStyles = makeStyles({
	root: {
		width: 275,
		height: 300,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function Practice() {
	const classes = useStyles();
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<PracticeDiv>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
				<Card className={classes.root} variant="outlined">
					<CardContent>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						>
							Mathematics
						</Typography>

						<Typography variant="body1" component="p">
							What is the square root of 27?
						</Typography>
					</CardContent>
				</Card>

				<Card className={classes.root} variant="outlined">
					<CardContent>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						>
							Mathematics
						</Typography>

						<Typography variant="body1" component="p">
							3
						</Typography>
					</CardContent>
				</Card>
			</ReactCardFlip>
			<Button size="small" onClick={() => setIsFlipped(!isFlipped)}>
				Flip
			</Button>
		</PracticeDiv>
	);
}
