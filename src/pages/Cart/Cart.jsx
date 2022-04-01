import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { INITIALIZE_CART } from "../../reducer";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { Checkout, ProductHorizontalCard } from "../../components";
import "./Cart.css";

export const Cart = () => {
  const [loader, setLoader] = useState(false);
  const { cartProducts, cartDispatch } = useCart();

  useScrollToTop();
  useDocumentTitle("Cart");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { cart },
        } = await axios.get("/api/user/cart", {
          headers: { authorization: localStorage.getItem("token") },
        });

        cartDispatch({
          type: INITIALIZE_CART,
          payload: cart,
        });
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return loader ? (
    <h4 className="text-center mt-6 p-1">Loading cart...</h4>
  ) : (
    <div>
      {cartProducts.length > 0 ? (
        <h3 className="mt-6 text-center">
          Shopping Cart ({cartProducts.length})
        </h3>
      ) : (
        ""
      )}

      {cartProducts.length ? (
        <div className="cart-container flex-row wrap content-center">
          <div className="cart-products mt-2">
            {cartProducts.map((product) => (
              <ProductHorizontalCard key={product._id} product={product} />
            ))}
          </div>
          <Checkout />
        </div>
      ) : (
        <div className="not-available text-center px-1">
          <p className="text-lg font-semibold mb-1">Your cart is empty.</p>
          <p>
            Check your wishlist for favourite items or{" "}
            <Link to="/products" className="continue">
              continue shopping
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
};
