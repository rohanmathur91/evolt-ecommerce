import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../contexts";
import { addToWishlist, removeFromWishlist } from "../../services";

export const ToggleWishlist = ({ product }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { wishlist, cartDispatch, checkProductInWishlist } = useCart();
  const isProductInWishlist = checkProductInWishlist(product._id, wishlist);

  const handleWishlistClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (!isProductInWishlist) {
        addToWishlist(product, cartDispatch);
      } else {
        removeFromWishlist(product._id, cartDispatch);
      }
    }
  };

  return (
    <button
      key={product._id}
      onClick={handleWishlistClick}
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
