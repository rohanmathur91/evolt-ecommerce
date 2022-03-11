import React, { useState } from "react";
import { useProduct } from "../../context";
import { ProductCard } from "../../components";
import { Filter, SortFilter, MobileFilter, MobileSortFilter } from "./Filters";
import "./Products.css";

export const Products = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [showSortFilter, setShowSortFilter] = useState(false);
	const { filteredAndSortedProducts } = useProduct();

	return (
		<div className="products-container flex-row">
			<aside className="filters flex-column py-3 px-4 border-r">
				<SortFilter />
				<Filter />
			</aside>
			<div className="products w-100 p-1 pt-5">
				{filteredAndSortedProducts.length ? (
					filteredAndSortedProducts.map((product) => (
						<ProductCard key={product.id} {...product} />
					))
				) : (
					<p className="not-available">No products available...</p>
				)}
			</div>

			{showSortFilter && (
				<MobileSortFilter setShowSortFilter={setShowSortFilter} />
			)}
			{showFilter && <MobileFilter setShowFilter={setShowFilter} />}

			<div className="mobile-filter-container fixed left-0 bottom-0 flex-row w-100">
				<button
					onClick={() => setShowSortFilter((prev) => !prev)}
					className="sort-btn filter-btn py-1 px-2 w-100 border-r transition-3"
				>
					<i className="fa fa-sort mr-1"></i>
					Sort
				</button>
				<button
					onClick={() => setShowFilter((prev) => !prev)}
					className="filter-btn p-2 w-100 transition-3"
				>
					<i className="fa fa-filter mr-1"></i>
					Filter
				</button>
			</div>
		</div>
	);
};
