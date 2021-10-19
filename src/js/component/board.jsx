import React, { useEffect } from "react";
import X from "../../img/pumkin.jpg";
import Circle from "../../img/skull.jpg";

import { useState } from "react";
import swal from "sweetalert";

export const Board = () => {
	const [turn, setTurn] = useState("pumkin.jpg");

	const changeTurn = () => {
		if (turn === "pumkin.jpg") {
			setTurn("skull.jpg");
		} else {
			setTurn("pumkin.jpg");
		}
		// turn == "pumkin.jpg" ? setTurn() : setTurn();

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
			? (arr.splice(e, 1, turn),
			  setArr(arr),
			  changeTurn(),
			  arr[0] == arr[1] && arr[0] == arr[2] && arr[0] != null
					? swal({
							title: "YOU WIN!",
							text: "The " + { turn } + " won the game",
							icon: "success"
					  })
					: "",
			  arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != null
					? swal({
							title: "YOU WIN!",
							text: "The " + { turn } + " won the game",
							icon: "success"
					  })
					: "",
			  arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != null
					? swal({
							title: "YOU WIN!",
							text: "The " + { turn } + " won the game",
							icon: "success"
					  })
					: "",
			  arr[0] == arr[3] && arr[0] == arr[6] && arr[0] != null
					? swal({
							title: "YOU WIN!",
							text: "The " + { turn } + " won the game",
							icon: "success"
					  })
					: "",
			  arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != null
					? swal({
							title: "YOU WIN!",
							text: "The " + { turn } + " won the game",
							icon: "success"
					  })
					: "",
			  arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != null
					? swal({
							title: "YOU WIN!",
							text: "The " + { turn } + " won the game",
							icon: "success"
					  })
					: "",
			  arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != null
					? swal({
							title: "YOU WIN!",
							text: "The " + { turn } + " won the game",
							icon: "success"
					  })
					: "",
			  arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != null
					? swal({
							title: "YOU WIN!",
							text: "The " + { turn } + " won the game",
							icon: "success"
					  })
					: "")
			: swal("Esa celda está ocupada");
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-5 mx-auto">
					<table className="table">
						<tbody>
							<tr>
								<td
									onClick={() => {
										changeToken(0);
									}}>
									<img className="token" src={arr[0]} />
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
