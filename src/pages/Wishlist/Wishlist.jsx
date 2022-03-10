import React from "react";
import { useCart } from "../../context";
import { ProductCard } from "../../components";
import "./Wishlist.css";

export const Wishlist = () => {
	const { wishlist } = useCart();

	return (
		<div>
			<h3 className="mt-6 mb-3 text-center">My Wishlist</h3>
			<div className="products w-100 p-1 mt-2 mb-6">
				{wishlist.length ? (
					wishlist.map((product) => (
						<ProductCard key={product.id} {...product} />
					))
				) : (
					<p className="not-available">No product in wishlist.</p>
				)}
			</div>
		</div>
	);
};
