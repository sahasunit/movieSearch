import React from "react";

const LeftBarIndex = () => {
	const movieOptions = [
		{
			title: "Star Wars 1",
			year: "1977",
			id: 1,
			picture: "beautiful Picture 1",
		},
		{
			title: "Star Wars 2",
			year: "1987",
			id: 2,
			picture: "beautiful Picture 2",
		},
		{
			title: "Star Wars 3",
			year: "2009",
			id: 3,
			picture: "beautiful Picture 3",
		},
		{
			title: "Star Wars 4",
			year: "1990",
			id: 4,
			picture: "beautiful Picture 4",
		},
		{
			title: "Star Wars 5",
			year: "2015",
			id: 5,
			picture: "beautiful Picture 5",
		},
		{
			title: "Star Wars 6",
			year: "2018",
			id: 6,
			picture: "beautiful Picture 6",
		},
	];

	const renderMovieOptions = () => {
		return (
			<div>
				{movieOptions.map((movie) => (
					<div className="border-b border-lightGray flex p-20">
						<img src="" alt={movie.picture} width="20" height="20" />
						<div className="pl-20 flex flex-col h-full">
							<div className="text-18">{movie.title}</div>
							<div className="text-14">{movie.year}</div>
						</div>
					</div>
				))}
			</div>
		);
	};

	return (
		<div
			className="overflow-scroll w-full h-full border-r border-lightGray"
			style={{
				maxWidth: "30%",
			}}
		>
			<div className="p-30">582 RESULTS</div>
			{renderMovieOptions()}
		</div>
	);
};

export default LeftBarIndex;
