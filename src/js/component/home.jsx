import React from "react";
import { Form } from "./form.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<header className="mt-4 d-inline-flex align-items-end">
				<h1>Tic Tac Toe&nbsp;</h1>
				<h2>in React.js</h2>
			</header>
			<h2 className="mb-5">Pick A Weapon</h2>
			<main>
				<Form />
			</main>
		</div>
	);
};

export default Home;
