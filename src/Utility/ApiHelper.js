import axios from "axios";

export const searchDB = ({ title, type, yearOfRelease }) => {
	let query = `http://www.omdbapi.com/?apiKey=c9187f8a&t=${title}&r=json`;

	if (type) {
		query += `&type=${type}`;
	}
	if (yearOfRelease) {
		query += `&y=${yearOfRelease}`;
	}

	const res = axios.get(query);
	return res;
};
