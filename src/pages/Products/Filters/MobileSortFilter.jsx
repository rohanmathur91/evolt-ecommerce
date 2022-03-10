import React from "react";
import { useProduct } from "../../../context";

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

	console.log(sortBy);

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
					<li key={0} className="filter-item mb-1">
						<label>
							<input
								type="radio"
								name="price"
								className="mr-2"
								checked={sortBy === "SORT_BY_LATEST"}
								onChange={() => {
									productDispatch({ type: "SORT", payload: "SORT_BY_LATEST" });
								}}
							/>
							Latest
						</label>
					</li>

					<li key={1} className="filter-item mb-1">
						<label>
							<input
								type="radio"
								name="price"
								className="mr-2"
								checked={sortBy === "SORT_BY_LOW_TO_HIGH"}
								onChange={() => {
									productDispatch({
										type: "SORT",
										payload: "SORT_BY_LOW_TO_HIGH",
									});
								}}
							/>
							Price (Low to High)
						</label>
					</li>

					<li key={2} className="filter-item mb-1">
						<label>
							<input
								type="radio"
								name="price"
								className="mr-2"
								checked={sortBy === "SORT_BY_HIGH_TO_LOW"}
								onChange={() => {
									productDispatch({
										type: "SORT",
										payload: "SORT_BY_HIGH_TO_LOW",
									});
								}}
							/>
							Price (High to Low)
						</label>
					</li>
					{/* {sortFilters.map(({ filter, sortProduct }, index) => (
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
					))} */}
				</ul>
			</div>
		</div>
	);
};
