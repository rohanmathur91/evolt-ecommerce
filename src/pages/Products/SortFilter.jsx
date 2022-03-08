import React from "react";

export const SortFilter = () => {
	return (
		<>
			<div className="flex-row content-space-between mb-3 py-2 border-bottom">
				<div className="filter-title font-bold">Filters</div>
				<button className="filter-clear-btn text-base font-bold">
					Clear all
				</button>
			</div>
			<ul>
				<li className="filter-header mb-2">
					<div className="text-base font-bold">Sort By</div>
				</li>

				<li className="filter-item mb-1">
					<label>
						<input
							className="mr-2"
							type="radio"
							name="price"
							id="filter-price"
						/>
						Price (Low to High)
					</label>
				</li>
				<li className="filter-item">
					<label>
						<input
							className="mr-2"
							type="radio"
							name="price"
							id="filter-price"
						/>
						Price (High to Low)
					</label>
				</li>
			</ul>
		</>
	);
};
