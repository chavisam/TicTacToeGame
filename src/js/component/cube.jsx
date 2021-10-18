import React from "react";
import PropTypes from "prop-types";
import { turn, changeTurn } from "../component/board.jsx";

export const Cube = props => {
	return (
		<td onClick={() => changeTurn()}>
			<img className="token" key={props.data} src="circle.png" alt="" />
		</td>
	);
};

Cube.propTypes = {
	data: PropTypes.number
};
