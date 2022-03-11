import React from "react";
import { useProduct } from "../../context";

export const Checkbox = ({ id, title, value, actionType, payload }) => {
	const { productDispatch } = useProduct();

	return (
		<label htmlFor={id} className="cursor-pointer">
			<input
				id={id}
				type="checkbox"
				className="mr-2 cursor-pointer"
				checked={value}
				onChange={(e) =>
					productDispatch({
						type: actionType,
						payload: payload || e.target.checked,
					})
				}
			/>
			{title}
		</label>
	);
};
