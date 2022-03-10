import React from "react";
import { useCart } from "../../context";
import { Checkout, ProductHorizontalCard } from "../../components";
import "./Cart.css";

export const Cart = () => {
	const { cartProducts } = useCart();

	return (
		<div>
			<h3 className="mt-7 text-center">
				Shopping bag{cartProducts.length > 0 ? `(${cartProducts.length})` : ""}
			</h3>
			<div className="cart-container flex-row wrap content-center">
				<div className="cart-products mt-2">
					{/* address  */}
					<div className="address-container flex-row content-space-between p-1 m-2 border rounded-sm">
						<div>
							<p className="font-semibold">Delivery Address</p>
							<p className="address">
								Lorem Ipsum, 7374 Lorem Ipsum has been the industry.Contrary to
								popular belief, Lorem Ipsum
							</p>
						</div>
						<a
							href="../address/addressList.html"
							className="btn-solid edit-btn rounded-full ml-2 p-2 flex-row flex-center border-l-1"
						>
							<i className="fa text-base fa-pencil"></i>
						</a>
					</div>
					{cartProducts.length ? (
						cartProducts.map((product) => (
							<ProductHorizontalCard key={product.id} {...product} />
						))
					) : (
						<p className="not-available text-center">Cart is empty 🙂.</p>
					)}
				</div>

				<Checkout />
			</div>
		</div>
	);
};
