import React, { useState } from "react";
import "./App.css";
import TopBarIndex from "./Components/TopBar/TopBarIndex";
import RightBarIndex from "./Components/RightBar/RightBarIndex";
import LeftBarIndex from "./Components/LeftBar/LeftBarIndex";
import { getMovieListByTitle, getMovieInfo } from "./Utility/ApiHelper";

const App = () => {
	const [movieListOptions, setMovieListOptions] = useState([]);
	const [movieTitle, setMovieTitle] = useState("");
	const [movieType, setMovieType] = useState([]);
	const [movieInfo, setMovieInfo] = useState();

	//This func sets the movieTitle serached and calls the function that triggers the api endpoint
	const movieTitleOnChange = async (movieTitle) => {
		setMovieTitle(movieTitle);
		const response = await getMovieListByTitle({
			title: movieTitle,
			type: movieType,
		});
		setMovieListOptions(response);
	};

	//This func sets the move types (filters) and calls the function that triggers the api endpoint
	const movieFilterOnChange = async ({ movieType }) => {
		setMovieType(movieType);
		const response = await getMovieListByTitle({
			title: movieTitle,
			type: movieType,
		});
		setMovieListOptions(response);
	};

	//this func calls the api func that fetches the information of the movie selected from the LHS
	const selectedMovieOnChange = async (movie) => {
		const mainMovie = await getMovieInfo({ imdbID: movie.imdbID });
		setMovieInfo(mainMovie);
	};

	return (
		<div
			className="overscroll-y-none w-full h-full"
			style={{
				maxHeight: "100%",
			}}
		>
			<TopBarIndex
				movieTitleOnChange={movieTitleOnChange}
				movieFilterOnChange={({ movieType }) =>
					movieFilterOnChange({ movieType })
				}
			/>
			<div className="flex">
				<LeftBarIndex
					movieList={movieListOptions}
					movieFilter={movieType}
					selectedMovie={selectedMovieOnChange}
				/>
				<RightBarIndex movieInfo={movieInfo} />
			</div>
		</div>
	);
};

export default App;
