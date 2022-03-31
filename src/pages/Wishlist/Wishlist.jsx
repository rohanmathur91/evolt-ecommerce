import axios from "axios";
import React, { useState, useEffect } from "react";
import { useCart } from "../../contexts";
import { INITIALIZE_WISHLIST } from "../../reducer";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { ProductCard } from "../../components";
import "./Wishlist.css";

export const Wishlist = () => {
  const [loader, setLoader] = useState(false);
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
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h3 className="mt-6 mb-3 text-center">My Wishlist</h3>
      {loader ? (
        <h4 className="text-center mt-2 p-1">Loading wishlist...</h4>
      ) : wishlist.length ? (
        <div className="products w-100 p-1 mt-2 mb-6">
          {wishlist.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="not-available">No product in wishlist.</p>
      )}
    </div>
  );
};
