import React from "react";

const RightBarIndex = () => {
	return (
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
					height: "55%",
				}}
			>
				<img alt="Star Wars Picture" width="300" height="300" />
				<div className="w-full">
					<div className="flex justify-end">
						<button className="border-2 text-bold px-20 py-10">
							Watchlist
						</button>
					</div>
					<div className="text-bold text-40 text-bold p-10">Movie Title</div>
					<div className="text-20 text-darkGray p-10">Ratings and details</div>
					<div className="text-20 text-darkGray p-10">Movie Cast</div>
				</div>
			</div>
			<div
				className="border-b border-lightGray p-30 text-18 text-darkGray"
				style={{
					height: "25%",
				}}
			>
				Movie Description
			</div>
			<div
				className="flex justify-evenly items-center"
				style={{
					height: "20%",
				}}
			>
				<div className="border-r border-lightGray flex flex-col w-full p-20 text-center text-16 text-darkGray">
					<span>8.7/10</span>
					<span>IMDB Rating</span>
				</div>
				<div className="border-r border-lightGray flex flex-col w-full p-20 text-center text-16 text-darkGray">
					<span>94%</span>
					<span>Rotten Tomatoes Rating</span>
				</div>
				<div className="flex flex-col w-full p-20 text-center text-16 text-darkGray">
					<span>82/100</span>
					<span>Metacritic Rating</span>
				</div>
			</div>
		</div>
	);
};

export default RightBarIndex;
