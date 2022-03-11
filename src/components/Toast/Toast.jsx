import React, { useEffect } from "react";
import { useProduct } from "../../context";
import "./Toast.css";

export const Toast = () => {
	const {
		toast: { type, message, showToast },
		productDispatch,
	} = useProduct();

	useEffect(() => {
		let timerId;
		if (showToast) {
			timerId = setTimeout(
				() => productDispatch({ type: "TOAST", payload: false }),
				2000
			);
		}
		return () => clearTimeout(timerId);
	}, [showToast]);

	return (
		<div
			class={`toast ${type} bottom-center fixed flex-row z-1 content-space-between items-center p-2 rounded-sm`}
		>
			<p class="mr-4">{message}</p>
			<button
				onClick={() => productDispatch({ type: "TOAST", payload: false })}
				class="close-btn text-base dark-gray transition-2"
			>
				<i class="fa fa-close"></i>
			</button>
		</div>
	);
};
