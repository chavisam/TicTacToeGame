import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Board } from "./board.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Chavi And Pablo TicTacToe Game</h1>
			<p>
				<img id="rigo" src={rigoImage} />
			</p>
			<Board />
		</div>
	);
};

export default Home;
