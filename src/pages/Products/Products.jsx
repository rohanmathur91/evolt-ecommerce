import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../components";
import "./Products.css";

export const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		try {
			(async () => {
				const {
					data: { products },
				} = await axios.get("/api/products");
				setProducts(products);
				console.log(products);
			})();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="products-container flex-row">
			{products.length ? (
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
