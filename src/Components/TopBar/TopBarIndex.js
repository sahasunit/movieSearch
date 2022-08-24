import React from "react";
import SearchIcon from "../../Assets/SearchIcon";

const TopBarIndex = () => {
	const movieTypes = [
		{
			id: 1,
			name: "Any",
		},
		{
			id: 2,
			name: "Movies",
		},
		{
			id: 3,
			name: "Series",
		},
		{
			id: 4,
			name: "Episodes",
		},
	];

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
					{movieTypes.map((movieType) => (
						<>
							<input type="radio" id={movieType.id} />
							<span className="px-10">{movieType.name}</span>
						</>
					))}
				</div>
			</div>
		);
	};
	return (
		<div className="flex h-100 bg-gray text-textGray">
			<div></div>
			<div className="text-black flex w-full">
				<div className="flex px-20 flex-end w-full items-center">
					<SearchIcon />
					<input
						className="bg-gray focus:outline-none pl-15 text-textGray"
						type="text"
						placeholder="Search movie"
					/>
				</div>
				{renderMovieTypeFilter()}
			</div>
		</div>
	);
};

export default TopBarIndex;
