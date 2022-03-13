import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useCart } from "../../context";
import { Input } from "../Input/Input";
import "./Address.css";

export const Address = () => {
	const { cartDispatch } = useCart();
	const [newAddress, setNewAddress] = useState({
		name: "",
		area: "",
		city: "",
		home: "",
		contact: "",
		country: "India",
		pinCode: "",
		addressType: "home",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		cartDispatch({
			type: "ADD_ADDRESS",
			payload: { id: nanoid(), ...newAddress },
		});
	};

	const updateAddress = (e, field) => {
		setNewAddress((address) => ({ ...address, [field]: e.target.value }));
	};

	return (
		<div className="address w-100 flex-row content-center">
			<form
				onSubmit={handleSubmit}
				className="py-2 px-4 w-100 border rounded-sm mt-4 mx-2 mb-2"
			>
				<h3 className="text-center mt-2 mb-3">Add address</h3>
				<div className="flex-column mb-3">
					<label htmlFor="country">Country/Region</label>
					<select
						type="text"
						id="country"
						value={newAddress.country}
						placeholder="Enter your country"
						className="mt-1 py-1 px-2 text-base border rounded-sm"
						onChange={(e) => updateAddress(e, "country")}
					>
						<option value="india">India</option>
						<option value="japan">Japan</option>
					</select>
				</div>

				<Input
					type="text"
					field="name"
					title="Full Name"
					placeholder="Enter your full name"
					newAddress={newAddress}
					updateField={updateAddress}
				/>

				<Input
					type="number"
					field="contact"
					title="Contact"
					placeholder="10-digit mobile number"
					newAddress={newAddress}
					updateField={updateAddress}
				/>

				<Input
					type="number"
					field="pinCode"
					title="PIN code"
					placeholder="6-digit PIN code"
					newAddress={newAddress}
					updateField={updateAddress}
				/>

				<Input
					type="text"
					field="home"
					title="Flat, House no, Building, Apartment"
					placeholder="Enter house details"
					newAddress={newAddress}
					updateField={updateAddress}
				/>

				<Input
					type="text"
					field="area"
					title="Area, Colony, Street, Sector"
					placeholder="Enter area details"
					newAddress={newAddress}
					updateField={updateAddress}
				/>

				<Input
					type="text"
					field="city"
					title="City, State"
					placeholder="Enter city and state details"
					newAddress={newAddress}
					updateField={updateAddress}
				/>

				<div className="flex-column mb-3">
					<label htmlFor="addressType">Address Type</label>
					<select
						type="text"
						id="addressType"
						value={newAddress.addressType}
						placeholder="Enter city and state details"
						className="mt-1 py-1 px-2 text-base border rounded-sm"
						onChange={(e) => updateAddress(e, "addressType")}
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
