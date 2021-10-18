import React from "react";
import X from "../../img/x.png";
import Circle from "../../img/circle.png";
import { useState } from "react";
import { Cube } from "./cube.jsx";

export const Board = () => {
	const [turn, setTurn] = useState("x.png");

	const changeTurn = () => {
		alert(turn);
		turn === "x.png" ? () => setTurn("circle.png") : () => setTurn("x.png");
		console.log(turn);
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-5 mx-auto">
					<table className="table bg-secondary">
						<tbody>
							<tr>
								<Cube data={0} />
								<Cube data={1} />
								<Cube data={2} />
							</tr>

							<tr>
								<Cube data={3} />
								<Cube data={4} />
								<Cube data={5} />
							</tr>
							<tr>
								<Cube data={6} />
								<Cube data={7} />
								<Cube data={8} />
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
