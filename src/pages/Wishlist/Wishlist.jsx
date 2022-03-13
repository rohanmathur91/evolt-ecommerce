import React from "react";
import { useCart } from "../../context";
import { ProductCard } from "../../components";
import "./WishList.css";

export const WishList = () => {
	const { wishlist } = useCart();

	return (
		<div>
			<h3 className="mt-6 mb-3 text-center">My Wishlist</h3>
			{wishlist.length ? (
				<div className="products w-100 p-1 mt-2 mb-6">
					{wishlist.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			) : (
				<p className="not-available">No product in wishlist.</p>
			)}
		</div>
	);
};
