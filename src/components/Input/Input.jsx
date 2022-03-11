import React from "react";

export const Input = ({
	field,
	title,
	type,
	placeholder,
	newAddress,
	updateAddress,
}) => {
	return (
		<div className="flex-column mb-3">
			<label htmlFor={field}>{title}</label>
			<input
				required
				id={field}
				type={type}
				placeholder={placeholder}
				className="mt-1 py-1 px-2 text-base border rounded-sm"
				value={newAddress[field]}
				onChange={(e) => updateAddress(e, field)}
			/>
		</div>
	);
};
