import React from "react";
import "./ProductHorizontalCard.css";

export const ProductHorizontalCard = ({
	id,
	alt,
	image,
	price,
	oldPrice,
	discount,
	description,
	quantity,
}) => {
	return (
		<div className="cart-item border flex-row items-center relative transition-2 m-2 p-1 rounded-sm">
			<div className="w-20 h-20 text-center mx-1">
				<img src={image} alt={alt} />
			</div>
			<div className="card-content flex-column content-space-between pt-2 px-2">
				<div className="w-100">
					<div className="card-title font-semibold card-text mb-1">
						{description}
					</div>

					<div className="mb-1">
						<span className="mr-2 font-bold">₹{price}</span>
						<span className="gray">
							<s>₹{oldPrice}</s>
						</span>
					</div>
					<p className="gray font-bold mb-1">{discount}% off</p>
					<div className="quantity flex-row my-2">
						<p className="mr-1">Quantity:</p>
						<button className="quantity-btn flex-row flex-center rounded-full mr-2">
							-
						</button>
						<input
							className="quantity-input text-center border rounded-sm mr-2"
							type="text"
							name="quantity"
							id="quantity"
							value={quantity}
						/>
						<button className="quantity-btn flex-row flex-center rounded-full">
							+
						</button>
					</div>
				</div>
				<div className="flex-row wrap">
					<button className="btn btn-solid font-semibold items-end transition-2 mr-1 mb-1">
						Move to wishlist
					</button>
					<button className="btn btn-outlined font-semibold rounded-sm items-end transition-2 mb-1">
						Remove from cart
					</button>
				</div>
			</div>
		</div>
	);
};
