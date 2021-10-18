import React from "react";
import X from "../../img/x.png";
import Circle from "../../img/circle.png";
import { useState } from "react";
import swal from "sweetalert";

export const Board = () => {
	const [turn, setTurn] = useState("x.png");

	const changeTurn = () => {
		if (turn === "x.png") {
			setTurn("circle.png");
		} else {
			setTurn("x.png");
		}
		// turn == "x.png" ? setTurn() : setTurn();

		console.log(turn);
	};

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

	const changeToken = (e, index) => {
		arr[e] == null
			? (arr.splice(e, 1, turn), setArr(arr), changeTurn())
			: swal("Esa celda está ocupada");
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-5 mx-auto">
					<table className="table bg-secondary">
						<tbody>
							<tr>
								<td
									onClick={() => {
										changeToken(0);
									}}>
									<img
										className="token"
										src={arr[0]}
										alt=""
									/>
								</td>
								<td
									onClick={() => {
										changeToken(1);
									}}>
									<img
										className="token"
										src={arr[1]}
										alt=""
									/>
								</td>
								<td
									onClick={() => {
										changeToken(2);
									}}>
									<img
										className="token"
										src={arr[2]}
										alt=""
									/>
								</td>
							</tr>

							<tr>
								<td
									onClick={() => {
										changeToken(3);
									}}>
									<img
										className="token"
										src={arr[3]}
										alt=""
									/>
								</td>
								<td
									onClick={() => {
										changeToken(4);
									}}>
									<img
										className="token"
										src={arr[4]}
										alt=""
									/>
								</td>
								<td
									onClick={() => {
										changeToken(5);
									}}>
									<img
										className="token"
										src={arr[5]}
										alt=""
									/>
								</td>
							</tr>
							<tr>
								<td
									onClick={() => {
										changeToken(6);
									}}>
									<img
										className="token"
										src={arr[6]}
										alt=""
									/>
								</td>
								<td
									onClick={() => {
										changeToken(7);
									}}>
									<img
										className="token"
										src={arr[7]}
										alt=""
									/>
								</td>
								<td
									onClick={() => {
										changeToken(8);
									}}>
									<img
										className="token"
										src={arr[8]}
										alt=""
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
