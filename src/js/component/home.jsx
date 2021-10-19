import React from "react";

//include images into your bundle
import halloween from "../../img/halloween.png";
import { Board } from "./board.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<p>
				<img id="halloween" src={halloween} />
			</p>
			<Board />
		</div>
	);
};

export default Home;
