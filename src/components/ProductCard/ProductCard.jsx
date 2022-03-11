import React from "react";
import { useCart, useProduct } from "../../context";
import { ToggleWishlist } from "./ToggleWishlist";
import "./ProductCard.css";

export const ProductCard = ({
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
}) => {
	const { cartDispatch } = useCart();
	const { productDispatch } = useProduct();

	return (
		<div
			key={id}
			className={`${
				!inStock ? "out-of-stock-overlay" : ""
			} card card-shadow flex-column relative transition-2 m-1 p-1 rounded-sm border`}
		>
			{!inStock && (
				<div className="out-of-stock text-center w-100 font-bold z-1">
					Out of stock
				</div>
			)}
			{latest && (
				<span className="card-badge font-semibold absolute top-1 left-1 rounded-sm">
					New
				</span>
			)}

			<ToggleWishlist
				id={id}
				alt={alt}
				image={image}
				latest={latest}
				price={price}
				oldPrice={oldPrice}
				inStock={inStock}
				productName={productName}
				description={description}
			/>

			<div className="text-center h-20 flex-row flex-center">
				<img src={image} alt={alt} className="w-20" />
			</div>
			<div className="px-1">
				<div className="card-title card-text mt-2 mb-1 font-bold">
					{productName}
				</div>

				<p className="card-description card-text mb-1">{description}</p>
				<div className="card-price">
					<span className="font-semibold">₹{price}</span>
					<span className="price-strike font-regular">₹{oldPrice}</span>
				</div>
				<p className="mb-1 font-semibold"></p>
			</div>
			<button
				disabled={!inStock}
				onClick={() => {
					cartDispatch({
						type: "ADD_TO_CART",
						payload: {
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
						},
					});
				}}
				className="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1"
			>
				Add to cart
			</button>
		</div>
	);
};
