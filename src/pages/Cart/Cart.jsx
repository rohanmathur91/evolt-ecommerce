import React from "react";
import { useCart } from "../../context";
import { ProductHorizontalCard } from "../../components";
import "./Cart.css";

export const Cart = () => {
	const { cartProducts } = useCart();

	return (
		<div>
			<h3 class="mt-7 text-center">
				Shopping bag{cartProducts.length > 0 ? `(${cartProducts.length})` : ""}
			</h3>
			<div class="cart-container flex-row wrap content-center">
				<div class="cart-products mt-2">
					{/* address  */}
					<div class="address-container flex-row content-space-between p-1 m-2 border rounded-sm">
						<div>
							<p class="font-semibold">Delivery Address</p>
							<p class="address">
								Lorem Ipsum, 7374 Lorem Ipsum has been the industry.Contrary to
								popular belief, Lorem Ipsum
							</p>
						</div>
						<a
							href="../address/addressList.html"
							class="btn-solid edit-btn rounded-full ml-2 p-2 flex-row flex-center border-l-1"
						>
							<i class="fa text-base fa-pencil"></i>
						</a>
					</div>
					{cartProducts.length ? (
						cartProducts.map((product) => (
							<ProductHorizontalCard key={product.id} {...product} />
						))
					) : (
						<p className="not-available">Cart is empty 🙂.</p>
					)}
				</div>
				{/* checkout container  */}
				<div class="cart-checkout my-4 mx-2">
					<button class="btn btn-outlined rounded-sm w-100 mb-1 font-semibold transition-2">
						<i class="fa fa-tag mr-1"></i> Apply coupon
					</button>

					<div class="border flex-start p-3 rounded-sm">
						<p class="pb-1 font-bold border-bottom">Price Details</p>
						<div class="flex-row content-space-between py-1">
							<span>Price(2 items)</span>
							<span>₹4000</span>
						</div>
						<div class="flex-row content-space-between py-1">
							<span>Discount</span>
							<span>- ₹1000</span>
						</div>
						<div class="border-bottom flex-row content-space-between py-1 mb-1">
							<span>Delivery Charges</span>
							<span>₹500</span>
						</div>
						<div class="border-bottom font-bold flex-row content-space-between py-1 mb-1">
							<span>Total Amount</span>
							<span>₹3500</span>
						</div>
						<p class="py-1">You will save ₹1000 on this order</p>
						<button class="btn btn-solid w-100 font-semibold items-end transition-2 p-1 mt-1">
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
