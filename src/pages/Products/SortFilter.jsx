import React from "react";
import { useProduct } from "../../context";

const sortFilters = [
	{ filter: "Latest", sortProduct: "SORT_BY_LATEST" },
	{ filter: "Price (Low to High)", sortProduct: "SORT_BY_LOW_TO_HIGH" },
	{ filter: "Price (High to Low)", sortProduct: "SORT_BY_HIGH_TO_LOW" },
];

export const SortFilter = () => {
	const {
		productFilter: { sortBy },
		productDispatch,
	} = useProduct();

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

			<div className="filter-header mb-2 text-base font-bold">Sort By</div>
			<ul>
				{sortFilters.map(({ filter, sortProduct }, index) => (
					<li key={index} className="filter-item mb-1">
						<label>
							<input
								type="radio"
								name="price"
								className="mr-2"
								checked={sortBy === sortProduct}
								onChange={() => {
									productDispatch({ type: "SORT", payload: sortProduct });
								}}
							/>
							{filter}
						</label>
					</li>
				))}
			</ul>
		</>
	);
};
