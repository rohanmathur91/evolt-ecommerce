import React from "react";
import { Filter } from "./Filter";
import { useProduct } from "../../context";
import "./MobileFilter.css";

export const MobileFilter = ({ setShowFilter }) => {
	const { productDispatch } = useProduct();

	return (
		<div className="mobile-filter-wrapper">
			<div className="mobile-filter card-shadow p-4">
				<div className="flex-row content-space-between items-center">
					<div className="text-base font-bold">Filters</div>
					<button
						className="mobile-filter-close"
						onClick={() => setShowFilter((prev) => !prev)}
					>
						<span className="material-icons-outlined">cancel</span>
					</button>
				</div>

				<Filter />

				<button
					onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
					className="mobile-clear-btn btn btn-solid mt-2"
				>
					Clear all
				</button>
			</div>
		</div>
	);
};

MobileFilter.defaultProps = { setShowFilter: () => {} };
