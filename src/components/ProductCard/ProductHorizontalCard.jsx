import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { addToWishlist, removeFromCart, updateQuantity } from "../../services";
import "./ProductHorizontalCard.css";

export const ProductHorizontalCard = ({ product }) => {
  const [isloading, setIsLoading] = useState(false);
  const { cartDispatch } = useCart();
  const {
    _id,
    alt,
    image,
    price,
    oldPrice,
    productName,
    description,
    discount,
    qty,
  } = product;

  const handleMoveToWishlist = () => {
    addToWishlist(product, cartDispatch);
    removeFromCart(product._id, cartDispatch);
  };
  const handleRemoveFromCart = () => removeFromCart(_id, cartDispatch);
  const handleUpdateQuantity = (updateType) => {
    updateQuantity(_id, updateType, cartDispatch, setIsLoading);
  };

  return (
    <div className="cart-item border flex-row items-center relative transition-2 m-2 p-1 rounded-sm">
      <Link to={`/product/${_id}`}>
        <div className="w-20 h-20 text-center mx-1">
          <img src={image} alt={alt} />
        </div>
      </Link>

      <div className="card-content flex-column content-space-between pt-2 px-2">
        <div className="w-100">
          <Link to={`/product/${_id}`}>
            <div className="card-title font-semibold card-text mb-1">
              {description}
            </div>

            <div className="mb-1">
              <span className="mr-2 font-bold">₹{price}</span>
              <span className="gray">
                <s>₹{oldPrice}</s>
              </span>
            </div>
          </Link>
          <p className="gray font-bold mb-1">{discount}% off</p>
          <div className="flex-row items-center my-2">
            <p className="mr-1">Quantity:</p>
            <button
              disabled={isloading || qty === 1}
              onClick={() => handleUpdateQuantity("decrement")}
              className={`${
                qty === 1 ? "disable" : ""
              } quantity-btn flex-row flex-center rounded-full mr-2`}
            >
              <span className="material-icons-outlined">remove</span>
            </button>
            <span className="quantity px-3 flex-row flex-center border rounded-sm mr-2">
              {qty}
            </span>
            <button
              disabled={isloading}
              onClick={() => handleUpdateQuantity("increment")}
              className="quantity-btn flex-row flex-center rounded-full"
            >
              <span className="material-icons-outlined">add</span>
            </button>
          </div>
        </div>
        <div className="flex-row wrap">
          <button
            onClick={handleMoveToWishlist}
            className="btn btn-solid font-semibold items-end transition-2 mr-1 mb-1"
          >
            Move to wishlist
          </button>
          <button
            onClick={handleRemoveFromCart}
            className="btn btn-outlined font-semibold rounded-sm items-end transition-2 mb-1"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductHorizontalCard.defaultProps = {
  product: {
    _id: "",
    alt: "",
    image: "",
    price: 0,
    oldPrice: 0,
    productName: "",
    description: "",
    discount: 0,
    qty: 1,
  },
};
