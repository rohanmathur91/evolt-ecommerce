import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { INITIALIZE_WISHLIST } from "../../reducer";
import { useToast, useScrollToTop, useDocumentTitle } from "../../hooks";
import { ProductCard } from "../../components";
import "./Wishlist.css";

export const Wishlist = () => {
  const [loader, setLoader] = useState(false);
  const { showToast } = useToast();
  const { wishlist, cartDispatch } = useCart();

  useScrollToTop();
  useDocumentTitle("Wishlist");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { wishlist },
        } = await axios.get("/api/user/wishlist", {
          headers: { authorization: localStorage.getItem("token") },
        });

        cartDispatch({
          type: INITIALIZE_WISHLIST,
          payload: wishlist,
        });
        setLoader(false);
      } catch (error) {
        showToast("error", "Something went wrong!");
      }
    })();
  }, []);

  return loader ? (
    <h4 className="text-center mt-6 p-1">Loading wishlist...</h4>
  ) : (
    <>
      {wishlist.length ? (
        <>
          <h3 className="mt-6 mb-3 text-center">My Wishlist</h3>
          <div className="products-container w-100 p-1 mt-2 mb-6">
            {wishlist.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="not-available text-center px-1">
          <p className="text-lg font-semibold mb-1">Your wishlist is empty.</p>
          <p>
            Explore more products,{" "}
            <Link to="/products" className="continue">
              continue shopping
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
};
