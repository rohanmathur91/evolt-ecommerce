import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth, useCart } from "../../contexts";
import { addToCart, addToWishlist, removeFromWishlist } from "../../services";
import { useToast, useScrollToTop, useDocumentTitle } from "../../hooks";
import { checkProductInCart, checkProductInWishlist } from "../../utils";
import { RatingTool } from "./RatingTool";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const [loader, setLoader] = useState(false);
  const [productLoader, setProductLoader] = useState(false);
  const [product, setProduct] = useState(null);
  const { user } = useAuth();
  const location = useLocation();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { cartProducts, wishlist, cartDispatch } = useCart();
  const {
    _id,
    alt,
    image,
    price,
    oldPrice,
    inStock,
    productName,
    discount,
    description,
    rating,
  } = product ?? {};

  useScrollToTop();
  useDocumentTitle("Product Details");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { product },
        } = await axios.get(`/api/products/${productId}`);

        setProduct(product);
        setLoader(false);
      } catch (error) {
        showToast("error", "Could not fetch the product.");
      }
    })();
  }, []);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      if (checkProductInCart(_id, cartProducts)) {
        navigate("/cart");
      } else {
        addToCart(product, cartDispatch, setProductLoader, showToast);
      }
    }
  };

  const handleWishlistClick = () => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      if (!checkProductInWishlist(_id, wishlist)) {
        addToWishlist(product, cartDispatch, showToast);
      } else {
        removeFromWishlist(product, cartDispatch, showToast);
      }
    }
  };

  return loader ? (
    <div className="circular-loader loader w-100 flex-column flex-center">
      <CircularProgress />
    </div>
  ) : (
    <div className="product-details transition-2 mt-8 m-1 p-1 rounded-sm">
      <img src={image} alt={alt} className="product-image mx-2 p-3" />

      <div className="product-content py-2 px-3">
        <div>
          <h3 className="my-1">{productName}</h3>
          <p className="product-description">{description}</p>
          <div className="product-rating pt-1 pb-3 flex-row">
            {RatingTool(rating)}
          </div>
        </div>

        <div className="py-3 product-price">
          <div className="flex-row">
            <span className="mr-1 font-bold">₹{price}</span>
            <span className="gray">
              <s>₹{oldPrice}</s>
            </span>
            <p className="font-bold ml-1">({discount}% off)</p>
          </div>
          <p className="text-green font-semibold mt-1">
            Price inclusive of all taxes
          </p>

          <div className="flex-row mt-2">
            <button
              disabled={!inStock || productLoader}
              onClick={handleAddToCart}
              className={`${
                !inStock || loader ? "disable" : ""
              } btn btn-solid font-semibold icon items-end transition-2 my-1 mr-1`}
            >
              <span className="material-icons-outlined mr-1">
                shopping_cart
              </span>

              {checkProductInCart(_id, cartProducts)
                ? "Go to cart"
                : !inStock
                ? "Out of stock"
                : "Add to cart"}
            </button>
            <button
              disabled={productLoader}
              onClick={handleWishlistClick}
              className={`${
                loader ? "disable" : ""
              } btn btn-outlined font-semibold icon items-end transition-2 my-1`}
            >
              <span className="material-icons-outlined mr-1">
                favorite_border
              </span>
              {checkProductInWishlist(_id, wishlist)
                ? "Added in Wishlist"
                : "Wishlist"}
            </button>
          </div>
        </div>

        <div className="gray product-delivery mt-3">
          <p className="mb-1">100% Original Product</p>
          <p>Cash on delivery is available</p>
        </div>
      </div>
    </div>
  );
};
