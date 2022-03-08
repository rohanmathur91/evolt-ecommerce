import React, { useState } from "react";
import { data } from "./data";
import { Filter } from "./Filter";
import { SortFilter } from "./SortFilter";
import { ProductCard } from "../../components";
import { MobileFilter } from "./MobileFilter";
import "./Products.css";

export const Products = () => {
	const [showMobileFilter, setShowMobileFilter] = useState(false);

	return (
		<div className="products-container flex-row">
			<aside className="filters flex-column py-3 px-4 border-r">
				<SortFilter />
				<Filter />
			</aside>
			<div className="products w-100 p-1 pt-5 m-auto">
				{data.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>

			{showMobileFilter && (
				<MobileFilter setShowMobileFilter={setShowMobileFilter} />
			)}

			<div className="mobile-filter-container fixed left-0 bottom-0 flex-row w-100">
				<button
					onClick={() => setShowMobileFilter((prev) => !prev)}
					className="sort-btn filter-btn py-1 px-2 w-100 border-r transition-3"
				>
					<i className="fa fa-sort mr-1"></i>
					Sort
				</button>
				<button
					onClick={() => setShowMobileFilter((prev) => !prev)}
					className="filter-btn p-2 w-100 transition-3"
				>
					<i className="fa fa-filter mr-1"></i>
					Filter
				</button>
			</div>
		</div>
	);
};
