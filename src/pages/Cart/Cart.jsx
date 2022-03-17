import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { Checkout, ProductHorizontalCard } from "../../components";
import "./Cart.css";

export const Cart = () => {
	const { cartProducts } = useCart();

	return (
		<div>
			{cartProducts.length > 0 ? (
				<h3 className="mt-6 text-center">
					Shopping Cart ({cartProducts.length})
				</h3>
			) : (
				""
			)}

			{cartProducts.length ? (
				<div className="cart-container flex-row wrap content-center">
					<div className="cart-products mt-2">
						{cartProducts.map((product) => (
							<ProductHorizontalCard key={product.id} {...product} />
						))}
					</div>
					<Checkout />
				</div>
			) : (
				<div className="not-available text-center px-1">
					<p className="text-lg font-semibold mb-1">Your cart is empty.</p>
					<p>
						Check your wishlist for favourite items or{" "}
						<Link to="/products" className="continue">
							continue shopping
						</Link>
						.
					</p>
				</div>
			)}
		</div>
	);
};
