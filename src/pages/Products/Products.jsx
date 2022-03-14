import React, { useState } from "react";
import { useProduct } from "../../context";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import {
	ProductCard,
	Filter,
	SortFilter,
	MobileFilter,
	MobileSortFilter,
	Toast,
} from "../../components";
import "./Products.css";

export const Products = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [showSortFilter, setShowSortFilter] = useState(false);
	const {
		sortedProducts,
		toast: { showToast },
	} = useProduct();

	useScrollToTop();
	useDocumentTitle("Evolt | Products");

	return (
		<div className="products-container flex-row">
			{showToast && <Toast />}
			<aside className="filters flex-column py-3 px-4 border-r">
				<SortFilter />
				<Filter />
			</aside>

			{sortedProducts.length ? (
				<div className="products w-100 p-1 pt-5">
					{sortedProducts.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			) : (
				<p className="not-available">No products available...</p>
			)}

			{showSortFilter && (
				<MobileSortFilter setShowSortFilter={setShowSortFilter} />
			)}
			{showFilter && <MobileFilter setShowFilter={setShowFilter} />}

			<div className="mobile-filter-container fixed left-0 bottom-0 flex-row w-100">
				<button
					onClick={() => setShowSortFilter((prev) => !prev)}
					className="sort-btn filter-btn py-1 px-2 w-100 transition-3"
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
