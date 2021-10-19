import React from "react";

//include images into your bundle
import halloween from "../../img/halloween.png";
import { Board } from "./board.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-3">
			<div className="m-2">
				<img id="halloween" clasName="p-3" src={halloween} />
			</div>

			<Board />
		</div>
	);
};

export default Home;
