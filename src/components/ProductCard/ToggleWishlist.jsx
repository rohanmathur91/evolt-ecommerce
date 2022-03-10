import React from "react";
import { useCart } from "../../context";

export const ToggleWishlist = (product) => {
	const { cartDispatch, productInWishlist } = useCart();

	return (
		<button
			key={product.id}
			onClick={() =>
				!productInWishlist(product.id)
					? cartDispatch({
							type: "ADD_TO_WISHLIST",
							payload: product,
					  })
					: cartDispatch({
							type: "REMOVE_FROM_WISHLIST",
							payload: product.id,
					  })
			}
			className="card-badge-bg wishlist-badge absolute text-base top-1 right-1 rounded-full flex-row flex-center pointer"
		>
			{productInWishlist(product.id) ? (
				<i className="fa fa-heart wishlist-active"></i>
			) : (
				<i className="fa fa-heart-o"></i>
			)}
		</button>
	);
};
