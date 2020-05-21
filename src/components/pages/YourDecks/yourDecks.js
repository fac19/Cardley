import React from 'react';
import styled from 'styled-components';
// import getFetch from '../../../utils/fetchData/get-fetch'

const YourDecksDiv = styled.div``;

export default function YourDecks() {
	// const [decks, setDecks] = React.useState(null)
	// React.useEffect(() => {
	// 	const fetchObj = {
	// 		endpoint: "decks",
	// 		errorMessage: "could not get your decks",
	// 		authRequired: true
	// 	}
	// 	getFetch(fetchObj)
	// 	.then(res => {
	// 		setDecks(JSON.parse(res))
	// 	})
	// }, [])

	return <YourDecksDiv>your decks</YourDecksDiv>;
}
