import React from "react";
import { useCart } from "../../context";

export const AddressList = () => {
	const { addressList } = useCart();

	return (
		<>
			<h3 className="text-center mb-4 mt-6">My Addresses</h3>
			<div className="address w-100 flex-row content-center mt-2">
				<ul className="m-2">
					{addressList.map(
						({
							name,
							area,
							city,
							home,
							contact,
							country,
							pinCode,
							addressType,
						}) => (
							<li className="mb-3 border rounded-sm py-2 px-3">
								<div>
									<div className="text-base font-semibold mb-1">{name}</div>
									<p className="mb-1 address-area">{area}</p>
									<p className="mb-1">{`${country}, ${city} - ${pinCode}`}</p>
									<p className="mb-1">Type: {addressType}</p>
									<p>{contact}</p>
									<div className="address-btn flex-row">
										<div className="address-btn">
											<button className="btn btn-outlined font-semibold rounded-sm items-end transition-2 mx-1 mt-1">
												Remove
											</button>
											<button className="btn btn-solid font-semibold items-end transition-2 mt-1">
												Edit
											</button>
										</div>
									</div>
								</div>
							</li>
						)
					)}
				</ul>
			</div>
		</>
	);
};
