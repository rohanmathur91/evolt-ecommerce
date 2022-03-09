import React from "react";
import { useProduct } from "../../context";

export const SortFilter = () => {
	const { productDispatch } = useProduct();

	const sortFilters = [
		{ filter: "Latest", type: "SORT_BY_LATEST" },
		{ filter: "Price (Low to High)", type: "SORT_BY_LOW_TO_HIGH" },
		{ filter: "Price (High to Low)", type: "SORT_BY_HIGH_TO_LOW" },
	];

	return (
		<>
			<div className="flex-row content-space-between mb-3 py-2 border-bottom">
				<div className="filter-title font-bold">Filters</div>
				<button
					onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
					className="filter-clear-btn text-base font-bold"
				>
					Clear all
				</button>
			</div>

			<div>
				<div className="filter-header mb-2 text-base font-bold">Sort By</div>
				<ul>
					{sortFilters.map(({ filter }, index) => (
						<li key={index} className="filter-item mb-1">
							<label>
								<input
									className="mr-2"
									type="radio"
									name="price"
									id="filter-price"
								/>
								{filter}
							</label>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
