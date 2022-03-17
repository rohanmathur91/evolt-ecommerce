import React from "react";
import { useCart } from "../../context";

export const ToggleWishlist = ({ product }) => {
	const { wishlist, cartDispatch, checkProductInWishlist } = useCart();
	const isProductInWishlist = checkProductInWishlist(product.id, wishlist);

	const handleAddToWhishlist = () => {
		cartDispatch({
			type: "ADD_TO_WISHLIST",
			payload: product,
		});
	};

	const handleRemoveFromWishlist = () => {
		cartDispatch({
			type: "REMOVE_FROM_WISHLIST",
			payload: product.id,
		});
	};

	return (
		<button
			key={product.id}
			onClick={
				!isProductInWishlist ? handleAddToWhishlist : handleRemoveFromWishlist
			}
			className="card-badge-bg wishlist-badge absolute text-base top-1 right-1 rounded-full flex-row flex-center pointer"
		>
			<span
				className={`${
					isProductInWishlist ? "wishlist-badge-active" : ""
				} material-icons-outlined rounded-full`}
			>
				favorite
			</span>
		</button>
	);
};
