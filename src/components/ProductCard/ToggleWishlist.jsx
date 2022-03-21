import React from "react";
import { useAuth, useCart } from "../../context";
import { handleAddToWishlist, handleRemoveFromWishlist } from "../../services";

export const ToggleWishlist = ({ product }) => {
  const { user } = useAuth();
  const { wishlist, cartDispatch, checkProductInWishlist } = useCart();
  const isProductInWishlist = checkProductInWishlist(product._id, wishlist);

  return (
    <button
      key={product._id}
      onClick={
        !isProductInWishlist
          ? () => handleAddToWishlist(product, cartDispatch)
          : () => handleRemoveFromWishlist(product._id, cartDispatch)
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

ToggleWishlist.defaultProps = {
  product: {
    _id: "",
    alt: "",
    image: "",
    price: 0,
    oldPrice: 0,
    inStock: false,
    productName: "",
    description: "",
    addedInYear: "",
  },
};
