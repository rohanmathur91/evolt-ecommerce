import React from "react";

export const Input = ({ id, type, title, value, placeholder, updateValue }) => {
	return (
		<div className="flex-column mb-3">
			<label htmlFor={id}>{title}</label>
			<input
				required
				id={id}
				type={type}
				placeholder={placeholder}
				className="mt-1 py-1 px-2 text-base border rounded-sm"
				value={value}
				onChange={(event) => updateValue(event, id)}
			/>
		</div>
	);
};
