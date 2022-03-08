import React from "react";

export const ProductCard = () => {
	return (
		<div class="card card-shadow flex-column relative transition-2 m-1 p-1 rounded-sm border">
			<span class="card-badge text-base font-semibold absolute top-1 left-1 rounded-sm">
				New
			</span>
			<span class="card-badge-bg wishlist-badge absolute text-base top-1 right-1 rounded-full flex-row flex-center pointer">
				<i class="fa fa-heart-o"></i>
			</span>
			<div class="text-center h-20 flex-row flex-center">
				<img
					src="../assests/marshall-product-2.jpg"
					alt="avatar"
					class="w-20"
				/>
			</div>
			<div class="px-1">
				<h4 class="card-heading mt-2 mb-1">Marshall</h4>

				<p class="card-description mb-1">
					Acton II 15 Watt Wireless Bluetooth Speaker (Black)
				</p>
				<div class="card-price">
					<span class="font-bold">₹1900.00</span>{" "}
					<span class="price-strike font-regular">₹3000</span>
				</div>
				<p class="mb-1 font-semibold"></p>
			</div>
			<button class="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1">
				Add to cart
			</button>
		</div>
	);
};
