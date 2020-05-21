// import React from 'react';
// import styled from 'styled-components';
// import getFetch from '../../../utils/fetchData/get-fetch';

// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

// const CustomPracticeDiv = styled.div``;

// export default function CustomPractice() {
// 	const [decks, setDecks] = React.useState(null);
// 	React.useEffect(() => {
// 		const fetchObj = {
// 			endpoint: 'decks',
// 			errorMessage: 'could not get your decks',
// 			authRequired: true,
// 		};
// 		getFetch(fetchObj).then((res) => {
// 			setDecks(res);
// 			// console.log(res, typeof res)
// 			// // setDecks(JSON.parse(res))
// 		});
// 	}, []);

// 	return (
// 		<CustomPracticeDiv>
// 			<h2>Your Decks</h2>
// 			<form>
// 				// timer // map over decks turning them into checkboxes //
// 				submit button
// 			</form>

// 			{decks ? (
// 				decks.map((deck) => <p>{deck.deck_name}</p>)
// 			) : (
// 				<h3>This is where your decks will appear...</h3>
// 			)}

// 			<form
// 				className={classes.form}
// 				noValidate
// 				onSubmit={submitHandler}
// 			>
// 				<TextField
// 					variant="outlined"
// 					margin="normal"
// 					required
// 					fullWidth
// 					id="email"
// 					label="Email Address"
// 					name="email"
// 					autoComplete="email"
// 					autoFocus
// 				/>
// 				<FormControlLabel
// 					control={
// 						<Checkbox value="remember" color="primary" />
// 					}
// 					label="Remember me"
// 				/>
// 			<Button
// 				type="submit"
// 				fullWidth
// 				variant="contained"
// 				color="primary"
// 				className={classes.submit}
// 				onClick={submitHandler}
// 			>
// 				Start
// 			</Button>
// 		</CustomPracticeDiv>
// 	);
// }
