import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState, { getStore } from "../store/flux";
import PropTypes from "prop-types";

export default class EditContact extends React.Component {
	constructor() {
		super();

		var currentCustomer = {};
		this.state = {
			nameTemp: currentCustomer.full_name,
			emailTemp: currentCustomer.email,
			phoneTemp: currentCustomer.phone,
			addressTemp: currentCustomer.address
			// initialize your state
		};
	}

	// temp1 = storeTemp.contacto;
	// let contacTemp = temp1.filter(item => item.id === this.props.id);
	// nameTemp1 = contacTemp.name_full;

	render() {
		// this.setState({ nameTemp: objectTemp });

		// this.setState({ nameTemp: store.contacto[this.props.match.params.id].full_name });
		// console.log(store.contacto[this.props.match.params.id].full_name);
		// console.log(this.state.nameTemp);

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					//		debugger;
					let customerId = this.props.match.params.id;
					this.currentCustomer = store.contacto.find(item => item.id === parseInt(customerId));
					// setState({ state: currentCustomer });
					// let temp1 = store.contacto;
					// let contacTemp = temp1.filter(item => item.id === this.props.id);
					// let nameTemp1 = contacTemp.name_full;
					//	console.log(store);
					//	console.log(currentCustomer);

					//		this.setState({ nameTemp: store.contacto[this.props.match.params.id].full_name });

					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Edit contact</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											type="text"
											className="form-control"
											placeholder="Full Name"
											defaultValue={this.currentCustomer.full_name}
											onChange={event => this.setState({ nameTemp: event.target.value })}
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											type="email"
											className="form-control"
											placeholder="Enter email"
											defaultValue={this.currentCustomer.email}
											onChange={event => this.setState({ emailTemp: event.target.value })}
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											type="phone"
											className="form-control"
											placeholder="Enter phone"
											defaultValue={this.currentCustomer.phone}
											onChange={event => this.setState({ phoneTemp: event.target.value })}
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											type="text"
											className="form-control"
											placeholder="Enter address"
											defaultValue={this.currentCustomer.address}
											onChange={event => this.setState({ addressTemp: event.target.value })}
										/>
									</div>
									<button
										type="button"
										className="btn btn-primary form-control"
										onClick={() => {
											//	this.setState({ state: currentCustomer });
											actions.editContacto(
												this.state.nameTemp,
												this.state.emailTemp,
												this.state.phoneTemp,
												this.state.addressTemp,
												customerId,
												this.props.history
											);
										}}>
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
	}
}

EditContact.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};
