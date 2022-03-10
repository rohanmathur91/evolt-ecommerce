import React from "react";
import { useProduct } from "../../../context";
import { Sort } from "./Sort";

export const SortFilter = () => {
	const { productDispatch } = useProduct();

	return (
		<>
			<div className="flex-row content-space-between pt-2">
				<div className="filter-title font-bold">Filters</div>
				<button
					onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
					className="filter-clear-btn text-base font-bold"
				>
					Clear all
				</button>
			</div>
			<div className="filter-header py-2 mt-2 text-base font-bold">Sort By</div>
			<Sort />
		</>
	);
};
