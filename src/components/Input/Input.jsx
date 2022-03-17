import React from "react";
import "./Input.css";

export const Input = ({
	id,
	type,
	title,
	value,
	placeholder,
	updateValue,
	error,
	showPassword,
}) => {
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

			{error && (
				<div className="validation-msg flex-row items-center mt-1 error">
					<span className="material-icons-outlined mr-1">error_outline</span>{" "}
					{error}
				</div>
			)}
		</div>
	);
};
