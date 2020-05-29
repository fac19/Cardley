import styled from 'styled-components';

const ButtonsDiv = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 2rem;
	padding-bottom: 10px;
	margin-left: -10px;
	max-width: 325px;
	justify-content: space-around;
	align-items: center;
	background-color: rgb(250, 250, 250);
	@media (min-width: 600px) {
		padding-bottom: 100px;
	}
`;

// eslint-disable-next-line import/prefer-default-export
export { ButtonsDiv };
