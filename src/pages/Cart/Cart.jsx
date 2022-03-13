import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { Checkout, ProductHorizontalCard } from "../../components";
import "./Cart.css";

export const Cart = () => {
	const { cartProducts } = useCart();

	return (
		<div>
			<h3 className="mt-7 text-center">
				Shopping Cart{cartProducts.length > 0 ? `(${cartProducts.length})` : ""}
			</h3>

			{cartProducts.length ? (
				<div className="cart-container flex-row wrap content-center">
					<div className="cart-products mt-2">
						<div className="address-container flex-row content-space-between p-1 m-2 border rounded-sm">
							<div>
								<p className="font-semibold">Delivery Address</p>
								<p className="address">
									Lorem Ipsum, 7374 Lorem Ipsum has been the industry.Contrary
									to popular belief, Lorem Ipsum
								</p>
							</div>
							<Link
								to="/profile/address"
								className="btn-solid edit-btn rounded-full ml-2 p-2 flex-row flex-center border-l-1"
							>
								<i className="fa text-base fa-pencil"></i>
							</Link>
						</div>
						{cartProducts.map((product) => (
							<ProductHorizontalCard key={product.id} {...product} />
						))}
					</div>
					<Checkout />
				</div>
			) : (
				<div className="not-available text-center">
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
