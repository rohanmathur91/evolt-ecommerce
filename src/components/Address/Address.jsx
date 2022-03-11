import React from "react";
import { Input } from "../Input/Input";
import "./Address.css";

export const Address = () => {
	return (
		<div className="address w-100 flex-row content-center">
			<form
				className="py-2 px-4 w-100 border rounded-sm mt-4 mx-2 mb-2"
				action="./address.html"
			>
				<h3 className="text-center mt-2 mb-3">Add address</h3>
				<div className="flex-column mb-3">
					<label htmlFor="country">Country/Region</label>
					<select
						className="mt-1 py-1 px-2 text-base border rounded-sm"
						id="country"
						type="text"
						placeholder="Enter your country"
					>
						<option value="india">India</option>
						<option value="japan">Japan</option>
					</select>
				</div>

				<Input
					type="text"
					id="firstName"
					title="Full Name"
					placeholder="Enter your full name"
					onChange={() => console.log("here")}
				/>

				<Input
					type="number"
					id="contact"
					title="Contact"
					placeholder="10-digit mobile number"
				/>

				<Input
					type="number"
					id="pinCode"
					title="PIN code"
					placeholder="6-digit PIN code"
				/>

				<Input
					type="text"
					id="home"
					title="Flat, House no, Building, Apartment"
					placeholder="Enter house details"
				/>

				<Input
					type="text"
					id="area"
					title="Area, Colony, Street, Sector"
					placeholder="Enter area details"
				/>

				<Input
					type="text"
					id="city"
					title="City, State"
					placeholder="Enter city and state details"
				/>

				<div className="flex-column mb-3">
					<label htmlFor="city">Address Type</label>
					<select
						id="city"
						type="text"
						placeholder="Enter city and state details"
						className="mt-1 py-1 px-2 text-base border rounded-sm"
					>
						<option value="home">Home (7 am – 9 pm delivery)</option>
						<option value="office">
							Office/Commercial (10 AM - 6 PM delivery)
						</option>
					</select>
				</div>

				<button className="btn btn-solid p-1 w-100 font-semibold transition-2 mr-1 mb-2 rounded-sm">
					Add
				</button>

				<div className="text-center mb-2">
					<a href="./addressList.html">
						<i className="fa fa-chevron-left"></i> Go back
					</a>
				</div>
			</form>
		</div>
	);
};
