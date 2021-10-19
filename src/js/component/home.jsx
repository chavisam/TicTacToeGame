import React from "react";

//include images into your bundle
import halloween from "../../img/halloween.png";
import { Board } from "./board.jsx";
import { Form } from "./form.jsx";


//create your first component
const Home = () => {
	return (

		<div className="text-center mt-3">
			<div className="m-2">
				<img id="halloween" clasName="p-3" src={halloween} />
			</div>
	<h2 className="mb-5">Pick A Weapon</h2>
			<main>
				<Form />
			</main>
			<Board />

		</div>
	);
};

export default Home;
