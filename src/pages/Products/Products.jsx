import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProduct } from "../../context";
import {
	Filter,
	SortFilter,
	MobileFilter,
	MobileSortFilter,
	ProductCard,
} from "../../components";
import "./Products.css";

export const Products = () => {
	const [error, setError] = useState(null);
	const [showFilter, setShowFilter] = useState(false);
	const [showSortFilter, setShowSortFilter] = useState(false);
	const { sortedProducts, productDispatch } = useProduct();

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { products },
				} = await axios.get("/api/products");
				productDispatch({ type: "FETCH_PRODUCTS", payload: products });
			} catch (error) {
				setError("No products to show.");
			}
		})();
	}, []);

	return (
		<div className="products-container flex-row">
			<aside className="filters flex-column py-3 px-4 border-r">
				<SortFilter />
				<Filter />
			</aside>

			{error ? (
				<p className="not-available">{error}</p>
			) : sortedProducts.length ? (
				<div className="products w-100 p-1 pt-5">
					{sortedProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
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
					onClick={() => setShowSortFilter((prevShowFilter) => !prevShowFilter)}
					className="sort-btn flex-row flex-center filter-btn py-1 px-2 w-100 transition-3"
				>
					<span className="material-icons-outlined mr-1">sort</span>
					Sort
				</button>
				<button
					onClick={() => setShowFilter((prevShowFilter) => !prevShowFilter)}
					className="filter-btn flex-row flex-center p-2 w-100 transition-3"
				>
					<span className="material-icons-outlined mr-1">filter_alt</span>
					Filter
				</button>
			</div>
		</div>
	);
};
