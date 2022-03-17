import React from "react";
import { useCart } from "../../context";
import "./ProductHorizontalCard.css";

export const ProductHorizontalCard = ({ product }) => {
	const { cartDispatch } = useCart();
	const {
		id,
		alt,
		image,
		latest,
		price,
		oldPrice,
		inStock,
		productName,
		description,
		discount,
		quantity,
	} = product;

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
					<div className="flex-row items-center my-2">
						<p className="mr-1">Quantity:</p>
						<button
							onClick={() =>
								cartDispatch({
									type: "DECREASE_QUANTITY",
									payload: { id, quantity },
								})
							}
							className="quantity-btn flex-row flex-center rounded-full mr-2"
						>
							<i className="fa fa-minus"></i>
						</button>
						<span className="quantity px-3 flex-row flex-center border rounded-sm mr-2">
							{quantity || 0}
						</span>
						<button
							onClick={() =>
								cartDispatch({
									type: "INCREASE_QUANTITY",
									payload: { id, quantity },
								})
							}
							className="quantity-btn flex-row flex-center rounded-full"
						>
							<i className="fa fa-plus"></i>
						</button>
					</div>
				</div>
				<div className="flex-row wrap">
					<button
						onClick={() =>
							cartDispatch({
								type: "ADD_TO_WISHLIST",
								payload: product,
							})
						}
						className="btn btn-solid font-semibold items-end transition-2 mr-1 mb-1"
					>
						Move to wishlist
					</button>
					<button
						onClick={() =>
							cartDispatch({ type: "REMOVE_FROM_CART", payload: id })
						}
						className="btn btn-outlined font-semibold rounded-sm items-end transition-2 mb-1"
					>
						Remove from cart
					</button>
				</div>
			</div>
		</div>
	);
};
