import axios from "axios";

//this func fetches the movie list and also has the type filter allowing to fetch the type of entertainemnet searched
export const getMovieListByTitle = async ({ title, type }) => {
	try {
		if (title) {
			let query = `http://www.omdbapi.com/?apiKey=c9187f8a&s=${title}&r=json`;

			if (type) {
				Object.values(type).forEach((data) => {
					if (data.name === "Movies") {
						query += `&type=movie`;
					}
					if (data.name === "Series") {
						query += `&type=series`;
					}
					if (data.name === "Episodes") {
						query += `&type=episode`;
					}
					if (data.name === "Any") {
						query += `&type=movie&type=series&type=episode`;
					}
				});
			}
			return await axios.get(query).then((response) => {
				return response.data;
			});
		}
	} catch (error) {
		console.log(error);
	}
};

//this endpoint fetches the movie info to be displayed on the RHS
export const getMovieInfo = async ({ imdbID }) => {
	try {
		let query = `http://www.omdbapi.com/?apiKey=c9187f8a&i=${imdbID}&r=json`;

		return await axios.get(query).then((response) => {
			return response.data;
		});
	} catch (error) {
		console.log(error);
	}
};
