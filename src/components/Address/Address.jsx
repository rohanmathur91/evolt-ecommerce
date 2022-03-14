import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useCart } from "../../context";
import { Input } from "../Input/Input";
import { countries } from "../../staticData";
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

	console.log(newAddress);

	const updateAddress = (event, field) => {
		setNewAddress((address) => ({ ...address, [field]: event.target.value }));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		cartDispatch({
			type: "ADD_ADDRESS",
			payload: { id: nanoid(), ...newAddress },
		});
	};

	return (
		<div className="address w-100 flex-row content-center">
			<form
				onSubmit={handleFormSubmit}
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
						onChange={(event) => updateAddress(event, "country")}
					>
						{countries.map((country) => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>

				<div className="address-input flex-row wrap content-space-between">
					<Input
						id="name"
						type="text"
						title="Full Name"
						placeholder="Enter your full name"
						value={newAddress.name}
						updateValue={updateAddress}
					/>

					<Input
						id="contact"
						type="number"
						title="Contact"
						placeholder="10-digit mobile number"
						value={newAddress.contact}
						updateValue={updateAddress}
					/>
				</div>

				<div className="address-input flex-row wrap content-space-between">
					<Input
						id="pinCode"
						type="number"
						title="PIN code"
						placeholder="6-digit PIN code"
						value={newAddress.pinCode}
						updateValue={updateAddress}
					/>

					<Input
						id="city"
						type="text"
						title="City, State"
						placeholder="Enter city and state details"
						value={newAddress.city}
						updateValue={updateAddress}
					/>
				</div>
				<Input
					id="home"
					type="text"
					title="Flat, House no, Building, Apartment"
					placeholder="Enter house details"
					value={newAddress.home}
					updateValue={updateAddress}
				/>

				<Input
					id="area"
					type="text"
					title="Area, Colony, Street, Sector"
					placeholder="Enter area details"
					value={newAddress.area}
					updateValue={updateAddress}
				/>

				<div className="flex-column mb-3">
					<div className="text-base">Address Type</div>
					<div className="flex-row">
						<label className="mr-2" htmlFor="addressType-home">
							<input
								type="radio"
								id="addressType-home"
								name="addressType"
								value="home"
								className="mt-1 mr-1 py-1 px-2 text-base"
								onChange={(event) => updateAddress(event, "addressType")}
							/>
							Home
						</label>

						<label htmlFor="addressType-office">
							<input
								type="radio"
								id="addressType-office"
								name="addressType"
								value="office"
								className="mt-1 mr-1 py-1 px-2 text-base"
								onChange={(event) => updateAddress(event, "addressType")}
							/>
							Office
						</label>
					</div>
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
