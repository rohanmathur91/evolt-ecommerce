import React from "react";
import { useCart } from "../../context";

export const Input = ({ id, title, type, placeholder }) => {
	const { newAddress, cartDispatch } = useCart();

	return (
		<div className="flex-column mb-3">
			<label htmlFor={id}>{title}</label>
			<input
				required
				id={id}
				type={type}
				placeholder={placeholder}
				className="mt-1 py-1 px-2 text-base border rounded-sm"
				value={newAddress[id]}
				onChange={(e) =>
					cartDispatch({
						type: "ADDRESS",
						payload: { id, value: e.target.value },
					})
				}
			/>
		</div>
	);
};
