import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState, { getStore } from "../store/flux";

export default class AddContact extends React.Component {
	constructor() {
		super();
		this.state = {
			nameTemp: null,
			emailTemp: null,
			phoneTemp: null,
			addressTemp: null
			// initialize your state
		};
	}

	clickFunction = () => {};
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Add a new contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											type="text"
											className="form-control"
											placeholder="Full Name"
											value={this.state.nameTemp}
											onChange={event => this.setState({ nameTemp: event.target.value })}
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											type="email"
											className="form-control"
											placeholder="Enter email"
											value={this.state.emailTemp}
											onChange={event => this.setState({ emailTemp: event.target.value })}
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											type="phone"
											className="form-control"
											placeholder="Enter phone"
											value={this.state.phoneTemp}
											onChange={event => this.setState({ phoneTemp: event.target.value })}
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											type="text"
											className="form-control"
											placeholder="Enter address"
											value={this.state.addressTemp}
											onChange={event => this.setState({ addressTemp: event.target.value })}
										/>
									</div>
									<button
										type="button"
										className="btn btn-primary form-control"
										onClick={() =>
											actions.addContacto(
												this.state.nameTemp,
												this.state.emailTemp,
												this.state.phoneTemp,
												this.state.addressTemp,
												this.props.history
											)
										}>
										save
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										or get back to contacts
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);

		AddContact.propTypes = {
			history: PropTypes.object
		};
	}
}
