import React from "react";
import "./ProductCard.css";

export const ProductCard = ({
	id,
	alt,
	image,
	latest,
	productName,
	description,
	latestPrice,
	oldPrice,
}) => {
	return (
		<div
			key={id}
			className="card card-shadow flex-column relative transition-2 m-1 p-1 rounded-sm border"
		>
			{latest && (
				<span className="card-badge font-semibold absolute top-1 left-1 rounded-sm">
					New
				</span>
			)}

			<span className="card-badge-bg wishlist-badge absolute text-base top-1 right-1 rounded-full flex-row flex-center pointer">
				<i className="fa fa-heart-o"></i>
			</span>
			<div className="text-center h-20 flex-row flex-center">
				<img src={image} alt={alt} className="w-20" />
			</div>
			<div className="px-1">
				<div className="card-heading card-text mt-2 mb-1 font-bold">
					{productName}
				</div>

				<p className="card-description card-text mb-1">{description}</p>
				<div className="card-price">
					<span className="font-semibold">₹{latestPrice}</span>
					<span className="price-strike font-regular">₹{oldPrice}</span>
				</div>
				<p className="mb-1 font-semibold"></p>
			</div>
			<button className="p-1 w-100 font-semibold btn btn-solid transition-2 mr-1">
				Add to cart
			</button>
		</div>
	);
};
