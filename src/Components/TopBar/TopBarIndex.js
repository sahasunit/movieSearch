import React, { useState } from "react";
import SearchIcon from "../../Assets/SearchIcon";

//This is where the searching and filtering options are available
const TopBarIndex = ({ movieTitleOnChange, movieFilterOnChange }) => {
	//creates the movie types list
	const movieTypes = [
		{
			id: "1",
			name: "Any",
		},
		{
			id: "2",
			name: "Movies",
		},
		{
			id: "3",
			name: "Series",
		},
		{
			id: "4",
			name: "Episodes",
		},
	];

	const [movieTitle, setMovieTitle] = useState("");
	const [movieType, setMovieType] = useState([]);

	//Callback to the parent component that further fetches the list of movies
	const searchMovie = () => {
		movieTitleOnChange(movieTitle);
	};

	///this function sets the filters and does a callback to the parent component that fetches different types of movie
	const setMovieFilter = (val) => {
		let type = movieTypes.filter((movie) => {
			if (val.target.checked) {
				return movie.id === val.target.id;
			}
		});
		if (!val.target.checked) {
			let movies = movieType.filter((data) => val.target.id !== data.id);
			setMovieType(movies);
			return movieFilterOnChange({
				movieType: [...movies],
			});
		}
		setMovieType((movieType) => [...movieType, ...type]);
		movieFilterOnChange({
			movieType: [...movieType, ...type],
		});
	};

	//this function runs over the list of types above and provides a checkbox option for filtering from movie list
	const renderMovieTypeFilter = () => {
		return (
			<div className="flex px-20 flex-end w-full h-full items-center justify-end text-textGray">
				<div className="px-20">
					<div>YEAR</div>
					<div>
						<span className="pr-10">1970</span>
						<input type="range" min="1970" max="2022" name="year" />
						<span className="pl-10">2022</span>
					</div>
				</div>
				<div className="px-20">
					<div>TYPE</div>
					<div className="flex inline">
						{movieTypes.map((movieType) => (
							<div key={movieType.id} className="flex">
								<input
									className="rounded-full"
									type="checkbox"
									id={movieType.id}
									onChange={(val) => setMovieFilter(val)}
								/>
								<label className="px-10">{movieType.name}</label>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};
	return (
		<div className="flex h-100 bg-gray text-textGray">
			<div className="text-black flex w-full">
				<div className="flex px-20 flex-end w-full items-center">
					<button type="button" onClick={() => searchMovie()}>
						<SearchIcon />
					</button>
					<input
						id="search"
						className="bg-gray focus:outline-none pl-15 text-textGray text-20 font-semibold"
						type="text"
						placeholder="Search movie"
						onChange={(e) => {
							setMovieTitle(e.target.value);
						}}
					/>
				</div>
				{renderMovieTypeFilter()}
			</div>
		</div>
	);
};

export default TopBarIndex;
