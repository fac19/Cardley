function removeSpaces(string) {
	return string.split(' ').join('-').toLowerCase();
}

export default removeSpaces;
