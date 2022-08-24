import React, { useEffect } from "react";
import "./App.css";
import TopBarIndex from "./Components/TopBar/TopBarIndex";
import RightBarIndex from "./Components/RightBar/RightBarIndex";
import LeftBarIndex from "./Components/LeftBar/LeftBarIndex";
import { searchDB } from "./Utility/ApiHelper";

const App = () => {
	useEffect(() => {
		const dbInfo = searchDB({ title: "Kung Fu Panda", type: "movie" });
		console.log("dbInfo:", dbInfo);
	}, []);

	return (
		<div
			className="overscroll-y-none w-full h-full"
			style={{
				maxHeight: "100%",
			}}
		>
			<TopBarIndex />
			<div className="flex">
				<LeftBarIndex />
				<RightBarIndex />
			</div>
		</div>
	);
};

export default App;
