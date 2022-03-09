import React from "react";
import { useProduct } from "../../context";

const sortFilters = [
	{ filter: "Latest", sortProduct: "SORT_BY_LATEST" },
	{ filter: "Price (Low to High)", sortProduct: "SORT_BY_LOW_TO_HIGH" },
	{ filter: "Price (High to Low)", sortProduct: "SORT_BY_HIGH_TO_LOW" },
];

export const MobileSortFilter = ({ setShowSortFilter }) => {
	const {
		productFilter: { sortBy },
		productDispatch,
	} = useProduct();

	return (
		<div className="mobile-filter-wrapper">
			<div className="mobile-filter card-shadow p-4">
				<div className="flex-row content-space-between items-center pb-1 mb-2 border-bottom">
					<div className="text-base font-semibold">Sort by</div>
					<button
						onClick={() => setShowSortFilter((prev) => !prev)}
						className="mobile-filter-close"
					>
						<i className="fa fa-times-circle-o"></i>
					</button>
				</div>
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
			</div>
		</div>
	);
};
