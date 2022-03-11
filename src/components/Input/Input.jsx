import React from "react";

export const Input = ({ id, title, type, placeholder }) => {
	return (
		<div className="flex-column mb-3">
			<label htmlFor={id}>{title}</label>
			<input
				required
				id={id}
				type={type}
				placeholder={placeholder}
				className="mt-1 py-1 px-2 text-base border rounded-sm"
			/>
		</div>
	);
};
