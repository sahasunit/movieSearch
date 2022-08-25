import React, { useState } from "react";

//this creates the navigation on movie list on the LHS
const LeftBarIndex = ({ movieList, selectedMovie }) => {
	const [movieSelected, setMovieSelected] = useState();

	//This function set the state to the movie selected and also does a callback to the parent component
	//sending it the movie info it needs to be diaplyed on the LHS
	const selectMovie = (movie) => {
		selectedMovie(movie);
		setMovieSelected(movie);
	};

	const renderMovieOptions = () => {
		return (
			<div>
				{movieList.Search &&
					movieList.Search?.map((movie) => (
						<div
							className={`border-b border-lightGray flex p-20 hover:bg-textGray ${
								movieSelected?.imdbID === movie?.imdbID ? "bg-textGray" : null
							}`}
							key={movie.imdbID}
							onClick={() => selectMovie(movie)}
						>
							<img src={movie.Poster} alt={movie.Type} width="70" />
							<div className="pl-20 flex flex-col h-max">
								<span className="text-18">{movie.Title}</span>
								<span className="text-14">{movie.Year}</span>
							</div>
						</div>
					))}
			</div>
		);
	};

	return movieList?.Search?.length > 0 ? (
		<div
			className="overflow-scroll w-full border-r border-lightGray focus-within:shadow-lg"
			style={{
				maxWidth: "30%",
				maxHeight: "100vh",
			}}
		>
			<div className="p-30">{`${
				movieList?.Search ? movieList.Search.length : 0
			} RESULTS`}</div>
			{renderMovieOptions()}
		</div>
	) : null;
};

export default LeftBarIndex;
