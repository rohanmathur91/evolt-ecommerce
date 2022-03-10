import React from "react";
import { Sort } from "./Sort";

export const MobileSortFilter = ({ setShowSortFilter }) => {
	return (
		<div className="mobile-filter-wrapper">
			<div className="mobile-filter card-shadow p-4">
				<div className="flex-row content-space-between items-center pb-2 mb-2 border-bottom">
					<div className="text-base font-bold">Sort by</div>
					<button
						onClick={() => setShowSortFilter((prev) => !prev)}
						className="mobile-filter-close"
					>
						<i className="fa fa-times-circle-o"></i>
					</button>
				</div>
				<Sort />
			</div>
		</div>
	);
};
