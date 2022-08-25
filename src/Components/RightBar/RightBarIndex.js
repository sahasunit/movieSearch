import React from "react";

//this displays the movie info on the RHS
const RightBarIndex = ({ movieInfo }) => {
	return movieInfo ? (
		<div
			className="flex flex-col p-30 h-full w-full"
			style={{
				maxWidth: "70%",
				height: "90vh",
			}}
		>
			<div
				className="border-b border-lightGray flex w-full p-10"
				style={{
					height: "60%",
				}}
			>
				<img src={movieInfo?.Poster} width="200" height="350" />
				<div className="w-full">
					<div className="flex justify-end">
						<button className="border-2 text-bold px-20 py-10">
							Watchlist
						</button>
					</div>
					<div className="flex flex-col h-full">
						<div className="font-bold text-40 text-bold p-10">
							{movieInfo?.Title}
						</div>
						<div className="p-20">
							{movieInfo?.Rated ? (
								<span className="text-20 text-darkGray py-5 px-15 border-2 text-bold">
									PG
								</span>
							) : null}
							<span className="text-20 text-darkGray p-10">
								{movieInfo?.Year}
							</span>
							<span className="text-20 text-darkGray p-10">
								. {movieInfo?.Genre} .
							</span>
							<span className="text-20 text-darkGray p-10">
								{movieInfo?.Runtime}
							</span>
						</div>
						<div className="text-20 text-darkGray p-10">
							{movieInfo?.Actors}
						</div>
					</div>
				</div>
			</div>
			<div
				className="border-b border-lightGray py-30 px-10 text-18 text-darkGray"
				style={{
					height: "20%",
				}}
			>
				{movieInfo?.Plot}
			</div>
			<div
				className="flex justify-evenly items-center"
				style={{
					height: "15%",
				}}
			>
				<div className="border-r border-lightGray flex flex-col w-full p-20 text-center text-16 text-darkGray">
					<span>{movieInfo?.Ratings[0]?.Value}</span>
					<span>IMDB Rating</span>
				</div>
				<div className="border-r border-lightGray flex flex-col w-full p-20 text-center text-16 text-darkGray">
					<span>{movieInfo?.Ratings[1]?.Value}</span>
					<span>Rotten Tomatoes Rating</span>
				</div>
				<div className="flex flex-col w-full p-20 text-center text-16 text-darkGray">
					<span>{movieInfo?.Ratings[2]?.Value}</span>
					<span>Metacritic Rating</span>
				</div>
			</div>
		</div>
	) : null;
};

export default RightBarIndex;
