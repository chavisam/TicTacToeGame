import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const Cube = props => {
	const [turn, setTurn] = useState("x.png");
	const [arr, setArr] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	]);
	let newArr = [...arr];

	const changeTurn = () => {
		console.log(turn);
		turn === "x.png" ? () => setTurn("circle.png") : () => setTurn("x.png");
		console.log(turn);
	};

	const play = e => {
		console.log("Juega " + turn);
		newArr[e] = turn;

		setArr(newArr);
	};

	return (
		<td
			onClick={() => {
				play(props.data);
				changeTurn();
			}}>
			<img className="token" key={props.data} src={newArr[props.data]} />
		</td>
	);
};

Cube.propTypes = {
	data: PropTypes.number
};
