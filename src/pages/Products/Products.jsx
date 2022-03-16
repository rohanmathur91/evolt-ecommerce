import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../components";
import "./Products.css";

export const Products = () => {
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const {
					data: { products },
				} = await axios.get("/api/products");
				setProducts(products);
			} catch (error) {
				setError("No products to show.");
			}
		})();
	}, []);

	return (
		<div className="products-container flex-row">
			{error ? (
				<p className="not-available">{error}</p>
			) : products ? (
				<div className="products w-100 p-1 pt-5">
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			) : (
				<p className="not-available">No products available...</p>
			)}
		</div>
	);
};
