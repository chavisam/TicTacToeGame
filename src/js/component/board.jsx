import React from "react";
import X from "../../img/x.png";
import Circle from "../../img/circle.png";

export const Board = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-5 mx-auto">
					<table className="table bg-secondary">
						<tbody>
							<tr>
								<td>
									<img className="token" src={X} alt="x" />
								</td>
								<td>
									<img
										className="token"
										src={Circle}
										alt="circle"
									/>
								</td>
								<td>
									<img className="token" src={X} alt="x" />
								</td>
							</tr>

							<tr>
								<td scope="row">
									<img className="token" src={X} alt="x" />
								</td>
								<td>
									<img
										className="token"
										src={Circle}
										alt="circle"
									/>
								</td>
								<td>
									<img className="token" src={X} alt="x" />
								</td>
							</tr>
							<tr>
								<td scope="row">
									<img className="token" src={X} alt="x" />
								</td>
								<td>
									<img className="token" src={X} alt="x" />
								</td>
								<td>
									<img className="token" src={X} alt="x" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
