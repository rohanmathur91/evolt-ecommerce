import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../contexts";
import { useToast } from "../../hooks";
import { addToCart } from "../../services";
import { checkProductInCart } from "../../utils";
import { ToggleWishlist } from "./ToggleWishlist";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const [loader, setLoader] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { cartProducts, cartDispatch } = useCart();
  const currentYear = new Date().getFullYear();
  const isProductInCart = checkProductInCart(product._id, cartProducts);

  const {
    _id,
    alt,
    image,
    price,
    oldPrice,
    inStock,
    productName,
    description,
    addedInYear,
  } = product;

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (isProductInCart) {
        navigate("/cart");
      } else {
        addToCart(product, cartDispatch, setLoader, showToast);
      }
    }
  };

  return (
    <div
      key={_id}
      className="card card-shadow cursor-pointer flex-column relative transition-2 m-1 p-1 rounded-sm border"
    >
      {(!inStock || addedInYear === currentYear) && (
        <span
          className={` ${
            !inStock ? "out-of-stock" : ""
          } card-badge font-semibold absolute top-1 left-1 rounded-sm`}
        >
          {!inStock ? "Out of stock" : "New"}
        </span>
      )}

      <ToggleWishlist product={product} />
      <Link to={`/product/${_id}`}>
        <div className="text-center h-20 flex-row flex-center">
          <img loading="lazy" src={image} alt={alt} className="w-20" />
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
      </Link>
      <button
        disabled={!inStock || loader}
        onClick={handleAddToCart}
        className={`${
          !inStock || loader ? "disable" : ""
        } p-1 w-100 font-semibold btn btn-solid transition-2 mr-1`}
      >
        {isProductInCart
          ? "Go to cart"
          : !inStock
          ? "Out of stock"
          : "Add to cart"}
      </button>
    </div>
  );
};

ProductCard.defaultProps = {
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
