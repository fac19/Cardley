const getJSON = (response, errorMessage) => {
	if (!response.ok) {
		throw new Error(`${errorMessage}, status: ${response.status}`);
	}
	return response.json();
};

export default getJSON;
