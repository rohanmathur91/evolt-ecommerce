import React from "react";
import { useCart } from "../../context";
import { ProductHorizontalCard } from "../../components";
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
				{/* checkout container  */}
				<div className="cart-checkout my-4 mx-2">
					<button className="btn btn-outlined rounded-sm w-100 mb-1 font-semibold transition-2">
						<i className="fa fa-tag mr-1"></i> Apply coupon
					</button>

					<div className="border flex-start p-3 rounded-sm">
						<p className="pb-1 font-bold border-bottom">Price Details</p>
						<div className="flex-row content-space-between py-1">
							<span>Price(2 items)</span>
							<span>₹4000</span>
						</div>
						<div className="flex-row content-space-between py-1">
							<span>Discount</span>
							<span>- ₹1000</span>
						</div>
						<div className="border-bottom flex-row content-space-between py-1 mb-1">
							<span>Delivery Charges</span>
							<span>₹500</span>
						</div>
						<div className="border-bottom font-bold flex-row content-space-between py-1 mb-1">
							<span>Total Amount</span>
							<span>₹3500</span>
						</div>
						<p className="py-1">You will save ₹1000 on this order</p>
						<button className="btn btn-solid w-100 font-semibold items-end transition-2 p-1 mt-1">
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
