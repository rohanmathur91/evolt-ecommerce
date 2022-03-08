import React from "react";

export const MobileSortFilter = ({ setShowSortFilter }) => {
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
					<li className="filter-item mb-1">
						<label>
							<input
								className="mr-2"
								type="radio"
								name="price"
								id="filter-price"
							/>
							Latest
						</label>
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
			</div>
		</div>
	);
};
