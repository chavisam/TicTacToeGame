import React from "react"; //import the react library
import PropTypes from "prop-types";

export const Form = props => {
	return (
		<div id="form" className="container py-4 backg-light text-light">
			<div className="row pb-1">
				<h4>CHOOSE YOUR WEAPON</h4>
			</div>
			<div className="row d-flex justify-content-center pb-2">
				<div className="col-auto p-0">
					<input
						type="text"
						className="form-control"
						required
						placeholder="Player 1 username"
					/>
				</div>
				<div className="col-auto p-0 ps-1">
					<input
						type="text"
						className="form-control"
						required
						placeholder="Player 2 username"
					/>
				</div>
			</div>
			<div className="row d-flex justify-content-center">
				<div className="col-auto button-parent-div mx-2">
					<button id="x-button" className="btn">
						<p className="btn-text">x</p>
					</button>
				</div>
				<div className="col-auto button-parent-div mx-2">
					<button id="o-button" className="btn">
						<p className="btn-text">o</p>
					</button>
				</div>
			</div>
		</div>
	);
};

Form.propTypes = {
	message: PropTypes.string
};
